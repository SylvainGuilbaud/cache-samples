Include %occInclude

/// <p>This class implements data loading utilities. Several data sets are loaded and distributed with the SAMPLES namespace - continents, countries, cities, 
/// and so on. Other data sets are not distributed but the loader utility for them is still implemented to demonstrate techniques such as how to create an 
/// iFind index and how to call $buildIndices. Some of these utilities cannot be run without having the input data files and passing the folder where those 
/// files are located to the utility. Only <method>loadATPList</method> and <method>loadSamplePeople</method> can be run without data files. The data files 
/// are not distributed with the kit. 
/// </p>
/// <p>
/// If data files are available and placed in a folder then the user can invoke <method>loadAll</method>, passing in the folder, or individual load utilities 
/// for specific data sets, again passing in the folder where the data files can be found. The folder is expected to be valid and terminated with the separator 
/// appropriate for the platform - slash for Mac OS X for example, reverse slash for Windows. If no folder is provided then the files are expected to be located 
/// in the current folder for the process. 
/// </p>
Class Demo.Document.Data.Loader
{

/// Clean up old sample collections, 'continents', 'countries', 'cities', 'states', 'People', 'ATPList', 'subdivisions', 'books', and 'movies'. 
ClassMethod dropAll()
{
	for collection = "continents","countries","cities","states","People","ATPList","subdivisions","books","movies" {
		try {
			do ##class(%DataModel.Document.Collection).$dropCollection(collection)
		} catch {
		}
	}
}

/// Load all of the sample data sets. <var>folder</var> defines the location of the data sets to be loaded. If not specified then 
/// the ^Sources global is the default. If ^Sources is not defined then the current folder will be used. 
ClassMethod loadAll(folder As %CacheString = "")
{
	try {
		set oldSize=$zs, $zs=$$$MaxPartitionSize
		do ..loadContinents(folder)
		do ..loadCountries(folder)
		do ..loadUSStates(folder)
		do ..loadCities(folder)
			// These data sets contain multibyte characters and are not loaded by default. 
		// do ..loadBooks(folder)
		// do ..loadMovies(folder)
			// Populate People from Sample.Person
		do ..loadSamplePeople(folder)
			// Populate the ATPList collection
		do ..loadATPList(folder)
		set $zs = oldSize
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		if $Data(oldSize) {
			set $zs = oldSize
		}
		return ""
	}
}

/// Load the 'continents' sample data set from the file 'continents-en.json'. <var>folder</var> defines the location of the data set, defaulting to 
/// the value of ^Sources, null if ^Sources is not defined. 
ClassMethod loadContinents(folder As %CacheString = "")
{
	try {
		set currentFolder = ..getFolder(folder,$Get(^Sources,"/") _"databases/samples/gbl/")
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		set file =  currentFolder _ "continents-en.json"
		try {
			do db.$dropCollection("continents")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set continents = db.$getCollection("continents")
		do continents.$createIndex("NX","{""key"":[[""name"",""string""]],""type"":""map""}")
		write !,"continents(): loaded "
		set start = $zh
		do continents.$fromJSON(..getStream(file))
		set et = $zh-start
		write continents.$size()_" documents in "_et_" seconds."
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		return ""
	}
	return continents
}

/// Load the 'countries' sample data set from the file 'countries-en.json'. <var>folder</var> defines the location of the data file. 
ClassMethod loadCountries(folder As %CacheString = "", encoding As %String = "")
{
	try {
		set unicode = $Select($$$ucase(encoding)="UNICODE":1,1:0)
		set currentFolder = ..getFolder(folder,$Get(^Sources,"/") _"databases/samples/gbl/")
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		set file =  currentFolder _ $Select('unicode:"countries-en.json",1:"countries-en-utf8.json")
		try {
			do db.$dropCollection("countries")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set countries = db.$getCollection("countries")
		do countries.$createIndex("NX",{"key":[["name","string"]],"type":"map"})
		do countries.$createIndex("CX",{"key":[["countryCode","string"]],"type":"bitmap"})
		do countries.$createIndex("FCX",{"key":[["featureClass","string"]],"type":"bitmap"})
		do countries.$createIndex("FCD",{"key":[["featureCode","string"]],"type":"bitmap"})
		do countries.$createIndex("LX",{"key":[["longitude","numeric"],["latitude","numeric"]],"type":"map"})
		write !,"countries(): loaded "
		set start = $zh
		do countries.$fromJSON(..getStream(file,$Select('unicode:"",1:"UTF8")))
		set et = $zh-start
		write countries.$size()_" documents in "_et_" seconds."
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		return ""
	}
	return countries
}

/// Load the 'Subdivisions' sample data set from the file 'subdivisions-en.json'. <var>folder</var> defines the location of the data file. 
ClassMethod loadSubdivisions(folder = "")
{
	try {
		if $zs < $$$MaxPartitionSize {
			set oldSize=$zs, $zs=$$$MaxPartitionSize
		} else {
			set oldSize = ""
		}
		set currentFolder = ..getFolder(folder,$Get(^Sources,"/") _"databases/samples/gbl/")
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		set file = currentFolder _ "subdivisions-en.json"
		write !,"Loading subdivisions sample data from ",file
		try {
			do db.$dropCollection("subdivisions")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set subdivisions = db.$getCollection("subdivisions")
		do subdivisions.$createIndex("NX",{"key":[["name.name","string"]],"type":"map"})
		do subdivisions.$createIndex("CX",{"key":[["country.""$id""","string"]],"type":"bitmap"})
		// do subdivisions.$createIndex("LX",{"key":[["longitude","numeric"],["latitude","numeric"]],"type":"map"})
		write !,"subdivisions(): "
		set start = $zh
		do subdivisions.$fromJSON(..getStream(file,$Select($system.Version.IsUnicode():"UTF8",1:"")))
		set et = $zh-start
		write "loaded ",subdivisions.$size()," documents in "_et_" seconds."
		if oldSize '= "" {
			set $zs = oldSize
			set oldSize = ""
		}
	} catch exception {
		if $Get(oldSize) '= "" {
			set $zs = oldSize
		}
		throw exception
	}
	return subdivisions
}

/// Load the 'cities' sample data set from the file 'cities-en.json'. <var>folder</var> defines the location of the data file. 
ClassMethod loadCities(folder As %CacheString = "")
{
	try {
		if $zs < $$$MaxPartitionSize {
			set oldSize=$zs, $zs=$$$MaxPartitionSize
		} else {
			set oldSize = ""
		}
		set currentFolder = ..getFolder(folder,$Get(^Sources,"/") _"databases/samples/gbl/")
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		set file =  currentFolder _ "cities-en.json"
		set stream = ..getStream(file,"")
		try {
			do db.$dropCollection("cities")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set cities = db.$getCollection("cities")
		do cities.$createIndex("NX",{"key":[["name","string"]],"type":"map"})
		do cities.$createIndex("CX",{"key":[["country","string"]],"type":"bitmap"})
		do cities.$createIndex("LX",{"key":[["longitude","numeric"],["latitude","numeric"]],"type":"map"})
		write !,"cities(): loaded "
		set start = $zh
		do cities.$fromJSON(..getStream(file))
		set et = $zh-start
		write cities.$size()_" documents in "_et_" seconds."
		if oldSize '= "" {
			set $zs = oldSize
			set oldSize = ""
		}
	} catch exception {
		if $Get(oldSize) '= "" {
			set $zs = oldSize
		}
		throw exception
	}
	return cities
}

/// Load the 'states' sample data set from the file 'usstates-en.json'. <var>folder</var> defines the location of the data file. 
ClassMethod loadUSStates(folder As %CacheString = "")
{
	try {
		set currentFolder = ..getFolder(folder,$Get(^Sources,"/") _"databases/samples/gbl/")
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		set file =  currentFolder _ "usstates-en.json"
		try {
			do db.$dropCollection("states")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set states = db.$getCollection("states")
		do states.$createIndex("NX",{"key":[["Name","string"]],"type":"map"})
		do states.$createIndex("AX",{"key":[["Abbreviation","string"]],"type":"map"})
		do states.$createIndex("CX",{"key":[["Capital","string"]],"type":"map"})
		write !,"states(): loaded "
		set start = $zh
		do states.$fromJSON(file)
		set et = $zh-start
		write states.$size()_" documents in "_et_" seconds."
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		return ""
	}
	return states
}

/// Load the 'books' sample data set from the folder 'books'. <var>folder</var> defines the location of the <var>books</var> folder. 
/// Each file contained there with the extension of "txt" will be loaded. 
ClassMethod loadBooks(folder As %CacheString = "")
{
	try {
		set currentFolder = ..getFolder(folder,$Get(^Sources,"/") _"databases/samples/gbl/")
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		try {
			do db.$dropCollection("books")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set books = db.$getCollection("books")
		do books.$createIndex("TX","{""key"":[[""title"",""string""]],""type"":""map""}")
		do books.$createIndex("SX",{"key":[["summary","exact"]],"type":"ifind","parameters":{"LANGUAGE":"en","LOWER":1}})
		set start = $zh
		kill array
		set rs = ##class(%ResultSet).%New("%Library.File:FileSet")
	    set sc = rs.Execute(currentFolder_"books/","*.txt")
	    if $$$ISERR(sc) {
		    $$$ThrowStatus(sc)
	    }
		while rs.%Next()  {
			set file = rs.%GetData(1)
			set array($increment(array)) = file
		}
		write !,"books(): loaded "
		set rs = ""
		set x = "",count=0, tDirLen = $length(currentFolder) + 1
		do ##class(%SYSTEM.Process).SetZEOF(1)
		for {
			set x = $order(array(x),1,file)
			quit:x=""
		    open file:"RSK\UTF8\"
		    use file
		    read line
			if ('$ZEOF) && line '= "" {
				set obj = { "title":$piece($extract(file,tDirLen,*),".txt",1) }
				set obj.summary = [line]
			    while (1) {
					read line
					quit:$zeof
					if line '= "" {
						do obj.summary.$push(line)
					}
			    }
			   	try { do books.$insert(obj) } catch fileException { use 0 do $system.OBJ.DisplayError(fileException.AsStatus()) use file}
			   	set count=count+1
			}
			close file
		    use 0
		}
		set et = $zh-start
		write books.$size()_" documents in "_et_" seconds."
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		return ""
	}
	return books
}

/// Load the 'movies' sample data set from the folder 'movies'. <var>folder</var> defines the location of the <var>movies</var> folder. 
/// Each file contained there with the extension of "txt" will be loaded. 
ClassMethod loadMovies(folder As %CacheString = "")
{
	try {
		set currentFolder = ..getFolder(folder,$Get(^Sources,"/") _"databases/samples/gbl/")
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		try {
			do db.$dropCollection("movies")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set movies = db.$getCollection("movies")
		set start = $zh
		kill array
		set rs = ##class(%ResultSet).%New("%Library.File:FileSet")
	    set sc = rs.Execute(currentFolder_"movies/","*.txt")
	    if $$$ISERR(sc) {
		    $$$ThrowStatus(sc)
	    }
		while rs.%Next()  {
			set file = rs.%GetData(1)
			set array($increment(array)) = file
		}
		write !,"movies(): loaded "
		set rs = ""
		set x = "",count=0, tDirLen = $length(currentFolder) + 1
		do ##class(%SYSTEM.Process).SetZEOF(1)
		for {
			set x = $order(array(x),1,file)
			quit:x=""
		    open file:"RSK\UTF8\"
		    use file
		    read line
			if ('$ZEOF) && line '= "" {
				set obj = { "title":$piece($extract(file,tDirLen,*),".txt",1) }
				set obj.summary = [line]
			    while (1) {
					read line
					quit:$zeof
					if line '= "" {
						do obj.summary.$push(line)
					}
			    }
			   	try { do movies.$insert(obj) } catch fileException { do $system.OBJ.DisplayError(tException.AsStatus()) }
			   	set count=count+1
			}
			close file
		    use 0
		}
		set et = $zh-start
		write movies.$size()_" documents in "_et_" seconds."
		write !,"Defining two indexes on movies - TX on title, and SX on summary (iFind index)..."
		do movies.$createIndex("TX","{""key"":[[""title"",""string""]],""type"":""map""}")
		do movies.$createIndex("SX",{"key":[["summary","exact"]],"type":"ifind","parameters":{"LANGUAGE":"en","LOWER":1}})
		write !,"Now building the index structures..."
		do movies.$buildIndices()
		write "complete."
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		return ""
	}
	return movies
}

/// Populate the 'People' collection with data harvested from the <class>Sample.Person</class> table. This utility also defines a 
/// predefined type named 'Sample.Document.People' that can be used in a JSON_TABLE expression. 
/// <pre>
/// SELECT * from JSON_TABLE('People','$' %TYPE 'Sample.Document.People')
/// </pre> 
ClassMethod loadSamplePeople(folder As %CacheString = "")
{
	try {
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		try {
			do db.$dropCollection("People")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set people = db.$getCollection("People")
		do people.$createIndex("NX","{""type"":""map"",""key"":[[""Name"",""string""]]}")
		do people.$createIndex("SK","{""type"":""map"",""key"":[[""SSN"",""string""]]}")
		do people.$createIndex("HC","{""type"":""bitmap"",""key"":[[""HomeCity"",""string""]]}")
		set stmt = ##class(%SQL.Statement).%New()
		set harvestPerson = "select JSON_OBJECT('Name' : Name, 'DOB' : DOB, 'SSN' : SSN, 'HomeCity' : Home_City) as json FROM Sample.Person"
		do stmt.prepare(.harvestPerson)
		set persons = stmt.execute()
		write !,"people(): loaded "
		set start = $zh
		while persons.%Next() {
			do people.$insert(persons.json)
		}
		set et = $zh-start
		write people.$size()_" documents from Sample.Person in "_et_" seconds."
		do db.$createType("Sample.Document.People","{""columns"":[{""column"":""Name"",""path"":""$.Name"",""type"":""varchar(50)""},{""column"":""DOB"",""path"":""$.DOB"",""type"":""DATE""},{""column"":""Gender"",""path"":""$.Gender"",""type"":""varchar(6)""},{""column"":""SSN"",""path"":""$.SSN"",""type"":""varchar(11)""},{""column"":""Occupation"",""path"":""$.Occupation"",""type"":""varchar(50)""}]}")
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		return ""
	}
	return people
}

ClassMethod loadATPList(folder As %CacheString = "")
{
	try {
		set db = ##class(%DataModel.Document.Database).$getDatabase()
		try {
			do db.$dropCollection("ATPList")
		} catch dropEx {
				// we don't care if the collection doesn't exist - SQLCODE = -2030
			if ('dropEx.%IsA("%DataModel.Document.SYS.Exception")) || (dropEx.AsSQLCODE() '= -2030) {
				throw dropEx
			}
		}
		set atp = db.$getCollection("ATPList")
		write !,"ATPList(): loaded "
		set start = $zh
			// inserts ten documents (top ten tennis players)
		set topTen = []
		do topTen.$push( { "Rank":1,
						"First Name":"Novak",
						"Last Name":"Djokovic",
						"Country":"Serbia",
						"Points":13045, 
						"Grand Slams":[
							{"Wimbledon":2},
							{"USOpen":1},
							{"Australian Open":5}
						],
					"DOB":$zdt("05/22/1987")
				}
			)
		do topTen.$push({"Rank":2,
					"First Name":"Roger",
					"Last Name":"Federer",
					"Country":"Switzerland",
					"Points":9205
				}
			)
		do topTen.$push({
					"Rank":3,
					"First Name":"Rafael",
					"Last Name":"Nadal",
					"Country":"Spain",
					"Points":5745
				}
			)
		do topTen.$push({
					"Rank":4,
					"First Name":"Andy",
					"Last Name":"Murray",
					"Country":"UK",
					"Points":5460
				}
			)
		do topTen.$push({
					"Rank":5,
					"First Name":"Kei",
					"Last Name":"Nishikori",
					"Country":"Japan",
					"Points":5205
				}
			)
		do topTen.$push({
					"Rank":6,
					"First Name":"Milos",
					"Last Name":"Raonic",
					"Country":"Canada",
					"Points":4845
				}
			)
		do topTen.$push({
					"Rank":7,
					"First Name":"Tomas",
					"Last Name":"Berdych",
					"Country":"Czech Republic",
					"Points":4660
				}
			)
		do topTen.$push({
					"Rank":8,
					"First Name":"Stan",
					"Last Name":"Wavrinka",
					"Country":"Switzerland",
					"Points":4050
				}
			)
		do topTen.$push({
					"Rank":9,
					"First Name":"David",
					"Last Name":"Ferrer",
					"Country":"Spain",
					"Points":3965
				}
			)
		do topTen.$push({
					"Rank":10,
					"First Name":"Marin",
					"Last Name":"Cilic",
					"Country":"Croatia",
					"Points":3945
				}
			)
			// Java: atpList.insert(topTen);
			// COS:
		do atp.$insertArray(topTen)		// TODO async
		set et = $zh-start
		write atp.$size()_" documents in "_et_" seconds."
	} catch exception {
		write !,"Exception caught: ",!
		do $system.OBJ.DisplayError(exception.AsStatus())
		return ""
	}
	return atp
}

ClassMethod getFolder(folder As %String(MAXLEN="") = "", default As %String(MAXLEN="") = "") As %String(MAXLEN="")
{
	if (folder '= "") {
		return ##class(%Library.File).NormalizeDirectory(folder)
	} else {
		return ##class(%Library.File).NormalizeDirectory(default)
	}
}

ClassMethod getStream(file As %String(MAXLEN="") = "", translationTable As %String = "") As %Stream.Object
{
	set stream = ##class(%Stream.FileCharacter).%New()
	do stream.LinkToFile(file)
	if translationTable '= "" {
		set stream.TranslateTable = translationTable
	}
	do stream.Rewind()
	return stream
}

}
