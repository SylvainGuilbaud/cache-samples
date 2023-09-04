Include %occInclude

/// This class demonstrates the use of the COS User API. DataModel:Document implements
/// two API's - one is the User API and the other the Service API. Users can only access the 
/// User API directly. 
Class Demo.Document.API.COS
{

/// Document API test class.
Parameter JSONTESTFILE = "subdivisions-en.json";

/// The demo method is a COS User API specific demo.
ClassMethod demo()
{
	try {
			// Get the current database:
		set db = ##class(%DataModel.Document.Database).$getDatabase()
	} catch exception {
	}
}

ClassMethod main(args... As %CacheString)
{
	try {
			// COS API does not yet support dataSource and connection - place holders present
		#dim dataSource as %DataModel.DataSource = $$$NULLOREF // new DocumentAPI().getDataSource(args[0]);

			// get all collections
		write "List of collections:",!
		set db = $system.Document.$getDatabase(dataSource)
		set collections = db.$getCollection("syscollections")
		set collectionStream = collections.$getIterator()
		while collectionStream.$getNext(.collectionID,.localID) {
			set collection = collections.$get(collectionID)
			write !,collection.name
		}
		write !

			// get ATPList collection
		#dim atpList as %DataModel.Document.Collection
		set atpList = db.$getCollection("ATPList")

			// set up a Collection monitor
		// CollectionMonitor monitor = CollectionMonitor.createMonitor(dataSource,"ATPList");

			// inserts ten documents (top ten tennis players)
		set topTen = ##class(%Array).$new() 							// List<Document> topTen = new ArrayList<>();
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
		set inserted = atpList.$insertArray(topTen)		// TODO async

			// test Java API JSON manipulation methods 
		set topAsJSONString = topTen.$get(0).$toJSON()
		write "Top ten: ",topAsJSONString,!
        write "First: ", topTen.$get(0).$toJSON(),!

		set top = ##class(%AbstractObject).$fromJSON(topAsJSONString)
		write "Top ranked: "
		do top.$toJSON()
		write !

			// test Collection.get(id)
		write "Third: "
		set thirdID = inserted.$get(2)
		do atpList.$get(thirdID).$toJSON()
		write !

        
			// replace a document
        do atpList.$replace(thirdID,{
						"Rank":4,
						"First Name":"Juan Martin",
						"Last Name":"Del Potro",
						"Country":"Argentina",
						"Points":4160
        			}
        		)
		write "Third after replace: "
		do atpList.$get(thirdID).$toJSON()
		write !

		write "Eigth: "
		set eigthID = inserted.$get(7)
		set eight = atpList.$get(eigthID)
		do eight.$toJSON()
		write !

		write "Top ten ATP players:",!
		set allPlayers = atpList.$getIterator()
		while allPlayers.$getNext(.playerID) {
			set player = atpList.$get(playerID)
			write !
			do player.$toJSON()
		}

			// upsert example - add a Grand Slam (Australian Open) to the eight on the list
			// Java: JSONArray newSlam = new JSONArray().add(new JSONObject().add("Australian Open",1));
		set newSlam = {"Australian Open":1}
			// Java: JSONObject upsertDocument = eight.add("Grand Slams",newSlam);
			// In COS, we need to check to see if there is an existing value in Grand Slams, if so then 
			// check to see if it is an array, if so then push the new one, if not, copy the existing value, 
			// insert it into an array and push the new.
		if eight.$isDefined("Grand Slams") {
			if ($Isobject(eight."Grand Slams")) && (eight."Grand Slams".$isA("%Library.Array")) {
				do eight."Grand Slams".$push(newSlam)
			} else {
				set old = eight."Grand Slams"
				set eight."Grand Slams" = []
				do eight."Grand Slams".$push(old)
				do eight."Grand Slams".$push(newSlam)
			}
		} else {
			set eight."Grand Slams" = []
			do eight."Grand Slams".$push(newSlam)
		}
			// Java: atpList.upsert(upsertDocument);
		set eight = atpList.$upsert(eigthID,eight)
			// Java: System.out.println("Eight after upsert: " +  Document.toJSONString(atpList.get("8"))+ "\r\n");
		do eight.$toJSON()
		write !
        
			// print top ten
			// Java: System.out.println("Top ten ATP players:");
		write "Top ten ATP players:",!
			// Java: List<Document> allPlayers = atpList.getAll();
		set topTen = atpList.$getAll()
			// Java: allPlayers.stream().forEach(document->System.out.println(Document.toJSONString(document)));
		set iterator = topTen.$getIterator()
		while iterator.$getNext(.key) {
			do topTen.$get(key).$toJSON()
			write !
		}
			// Java: System.out.println();
		write !

		
			//Execute the query
		set query = "Select * from JSON_TABLE(('ATPList'),('$') columns (Last_Name VARCHAR(50) path '$.\""Last Name\""', First_Name VARCHAR(50) path '$.\""First Name\""', Country VARCHAR(50) path '$.Country', Points VARCHAR(50) path '$.Points', Rank VARCHAR(50) path '$.Rank'))"
		set stmt = ##class(%SQL.Statement).%New()
		do stmt.prepare(query)
		set rs = stmt.execute()

			//Retrieve and display the results
		do rs.%Display()

		//Close the result set and database connection
		//rs.close();
		set rs = ""

		// we can also use streams to do driver side querying
		//System.out.println("Players with Grand Slams recorded:");
		//Stream<Document> stream = atpList.streamAll().filter(w->((JSONObject)w).containsField("Grand Slams"));
		//stream.forEach(document->System.out.println(Document.toJSONString(document)));

		// test reading JSON from a file, then insering it into a collection
		// Java: Collection subdivisionsCollection = Collection.createCollection(dataSource,"FromFile");
		// Java: subdivisionsCollection.drop();
		// Java: JSONArray subdivisionsDocument = (JSONArray) Document.fromJSONFile("/users/danp/intersystems/perforce/projects/docdb/internal/testing/unit_tests/dev/documents/DLP3310/_data/subdivisions-en.json");

		set subdivisionsCollection = db.$getCollection("FromFile")
		do subdivisionsCollection.$drop()

	/* The subdivisions-en.json is not currently available
		set subdivisionsCollection = db.$getCollection("FromFile")
			// Java: long start = getTime();
		set start = ..getTime()
			// first insert subdivisions synchronously
			// Java: subdivisionsCollection.insert(subdivisionsDocument);
		set currentFolder = ##class(%Library.File).NormalizeDirectory($system.Util.InstallDirectory()_"dev\java\samples\omnidb\")
		do subdivisionsCollection.$fromJSON(currentFolder_..#JSONTESTFILE)
			// Java: reportTime("Time to insert subdivisions: ",start);
		do ..reportTime("Time to insert subdivisions: ",start)

			// Java: long start = getTime();
		set start = ..getTime()
			// get all subdivisions synchronously
			// Java: subdivisionsCollection.getAll();
		set allSubs = subdivisionsCollection.$getAll()
			// Java: reportTime("Time to get all subdivisions synchronously: ",start);
		do ..reportTime("Time to get all subdivisions synchronously: ",start)


			// get a size of this collection
			// Java: System.out.println("Subdivisions size: " + subdivisionsCollection.size());
		write "Subdivisions size: ", subdivisionsCollection.$size(),!

			// remove a single document
				// Java: subdivisionsCollection.remove("2");
		set removed = subdivisionsCollection.$remove(2)

			// remove multiple documents
				// List<String> toRemove = new ArrayList<>();
				// toRemove.,"5");
				// toRemove.,"7");
				// toRemove.,"9");
		set toRemove = [5, 7, 9 ]
		do subdivisionsCollection.$removeArray(toRemove)

			// get a size of this collection
				// Java: System.out.println("Subdivisions size after removing four: " + subdivisionsCollection.size());
		write "Subdivisions size after removing four: " + subdivisionsCollection.$size(),!
				// Java: subdivisionsCollection.drop();
		do subdivisionsCollection.$drop()
				// Java: System.out.println("Subdivisions size: " + subdivisionsCollection.size());
		write "Subdivisions size: " + subdivisionsCollection.$size(),!

		// now insert subdivisions asynchronously
		//AsyncCollection asyncSubdivisions = AsyncCollection.getAsyncCollection(dataSource,"FromFile");
		//final long startAsyncInsert = getTime();
		//asyncSubdivisions.insert(subdivisions, (Response) -> {
		//	reportTime("Time to insert subdivisions asynchronously: ",startAsyncInsert);
		//});

		// let the async call complete
		//Thread.sleep(500);

		// get a size of this collection
		//System.out.println("Subdivisions size: " + subdivisionsCollection.size());

		// get all subdivisions asynchronously
		//asyncSubdivisions.getAll((List<Document> docs) -> {
		//	System.out.println("Async getAll returned: " + docs.size() + " documents.");
		//});

		// stream all subdivisions asynchronously
		//asyncSubdivisions.streamAll((Stream<Document> documentStream) -> {
		//	System.out.println("\r\nAsync streamAll returned: " + documentStream.count() + " documents.");
		//});
	*/
		// get a stream of all US states, then print them out
		// skip the first entry as it's not a subdivision




	/*
		System.out.println("All US States and territories: ");
		subdivisionsCollection.streamAll().skip(1).filter(document->
			((JSONObject)((JSONObject)document).getDocument("country")).getString("$id").equals("US")).
				forEach(document->System.out.println(Document.toJSONString(document)));

		// test reading JSON from an external URL, then insering it into a collectionhttpGET example
		Collection httpSample = Collection.createCollection(dataSource,"FromURL");
		//	httpSample.drop();		
		Document httpDocument = Document.fromURL(new URL("http://echo.jsontest.com/httpGET/example/returns/JSON"));
		httpSample.insert(httpDocument);

*/


			/* Java:
				httpDocument = Document.fromURL(new URL("https://api.github.com/repos/rethinkdb/rethinkdb/stargazers"));
				httpSample.insert(httpDocument);
			*/

			// This section requires a SSL/TLS configuration named 'Default' to be activated. If this is not true then this 
			// error is reported: 
			// ERROR #6085: Unable to write to socket with SSL/TLS configuration 'Default', error reported 'SSL/TLS configuration 'Default' is not activated.'
			// This is easily corrected by defining a Default configuration in the System Management Portal: System > Security Management > SSL/TLS Configurations. 
		set httpDocument = ##class(%Net.Http).getJSON("https://api.github.com/repos/rethinkdb/rethinkdb/stargazers",{"SSLConfiguration":"Default"})
		if $Isobject(httpDocument) {
			do db.$dropCollection("Stargazers")
			set starGazers = db.$getCollection("Stargazers")
			set starGazersIDS = starGazers.$insertArray(httpDocument)
			write !,"Stargazers data set imported from api.github.com using REST, number of documents: ",starGazers.$size()
			set documentID = starGazersIDS.$get(14)
			set starGazer = starGazers.$get(documentID)
			write !,"Stargazer ID = '"_documentID_"': ",!,starGazer.$toJSON(),!
			do starGazers.$drop()
		}


	/*
		// async collection examples
		List<Document> asyncInsertObjects = new ArrayList<>();
		asyncInsertObjects.$push({
				,"Rank",77).
				,"FirstName":"Dusan").
				,"LastName":"Lajovic").
				,"Country":"Serbia").
				,"Points",480));
		asyncInsertObjects.$push({
				,"Rank",101).
				,"FirstName":"Filip").
				,"LastName":"Krajinovic").
				,"Country":"Serbia").
				,"Points",270));

		AsyncCollection asyncCollection = AsyncCollection.getAsyncCollection(dataSource,"ATPList");
		asyncCollection.insert(asyncInsertObjects,(ResponseListener) (Response) -> {
			System.out.println("Successful AsyncCollection single insert.");
		});

		// batch example: add two, remove one, replace one
		Batch batch = Batch.createBatch(dataSource,"ATPList",true);
		List<Document> batchInserts = new ArrayList<>();
		batchInserts.$push({
							,"Rank",18).
							,"FirstName":"John").
							,"LastName":"Isner").
							,"Country":"USA"));
		batchInserts.$push({
							,"Rank",44).
							,"FirstName":"Viktor").
							,"LastName":"Troicki").
							,"Country":"Serbia"));
		batch.insert(batchInserts).
			replace("9",new JSONObject().
				,"Rank",9).
				,"FirstName":"Grigor").
				,"LastName":"Dimitrov").
				,"Country":"Bulgaria")).
			remove("10");

		// Execute batch synchronously
		Response status = batch.execute();

		// Execute batch asynchronously
		batch.execute((BasicListener) () -> {
			System.out.println("Batch successfully executed.");
		});
		write "This should get printed before async batch completes.",!
*/
		do atpList.$drop()
	} catch exception {
		do $system.OBJ.DisplayError(exception.AsStatus())
	}
}

ClassMethod getTime() As %CacheString
{
	return $zh
}

ClassMethod reportTime(text As %String(MAXLEN=""), start As %CacheString)
{
		write !,text,(..getTime()-start),!
}

ClassMethod fromURI(requestURI As %CacheString = "", sslConfigurationName As %CacheString = "") As %AbstractObject [ SqlName = fromURI, SqlProc ]
{
	try {
		do ##class(%Net.URLParser).Parse(requestURI,.requestComponent)
		set scheme = $Get(requestComponent("scheme"))
		if $Extract(scheme,1,4) = "http" {
				// Thanks to DMC
			set httprequest = ##class(%Net.HttpRequest).%New()
			set httprequest.Server = requestComponent("host")
			if $Data(requestComponent("port")) {
				set httprequest.Port = requestComponent("port")
			}
			do httprequest.SetHeader("Accept","application/json")
			do httprequest.SetHeader("ContentType","application/json")
			if $Data(requestComponent("username")) {
				set httprequest.Username = requestComponent("username")
			}
			if $Data(requestComponent("pwd")) {
				set httprequest.Password = requestComponent("password")
			}
			if (scheme = "https") && (sslConfigurationName '= "") {
				set httprequest.Https = 1
				set httprequest.SSLConfiguration = sslConfigurationName
			}
			set status = httprequest.Get($Get(requestComponent("path"))_$Select($Get(requestComponent("query"))="":"",1:"?"_requestComponent("query"))_$Select($Get(requestComponent("params"))="":"",1:";"_requestComponent("params")))
			if $$$ISERR(status) {
				$$$ThrowStatus(status)
			}
			set response = ##class(%AbstractObject).$fromJSON(httprequest.HttpResponse.Data)
		} elseif scheme = "file" {
				// file - is this always local?
			set response = $$$NULLOREF
		} else {
				// unsupported scheme or no default scheme defined (this is presently the case)
			set response = $$$NULLOREF
		}
	} catch exception {
		set response = $$$NULLOREF
		throw exception
	}
	return response
}

}
