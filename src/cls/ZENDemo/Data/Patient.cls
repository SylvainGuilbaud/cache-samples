/// Sample data class for Zen sample pages.
Class ZENDemo.Data.Patient Extends (%Persistent, %Populate) [ Inheritance = right ]
{

/// Index on Patient name
Index NameIdx On Name;

/// Index on SSN
Index SSNIdx On SSN;

/// Index on City
Index CityIdx On Home.City [ Type = bitmap ];

/// Index on State
Index StateIdx On Home.State [ Type = bitmap ];

/// Index on Patient sex
Index SexIdx On Sex [ Type = bitmap ];

/// Patient Name
Property Name As %String(MAXLEN = 100) [ Required ];

/// Patient SSN
Property SSN As %String(MAXLEN = 15);

/// Patient Marital Status
Property MaritalStatus As %String(MAXLEN = 1, VALUELIST = ",S,M,D,W,O");

/// Patient Sex
Property Sex As %String(MAXLEN = 1, VALUELIST = ",M,F,O");

/// Patient Date of Birth
Property DOB As %Date(FORMAT = 3, POPSPEC = ".MakeDOB()");

/// Patient's Favorite Color (so we can use a color control!)
Property FavoriteColor As %String(MAXLEN = 25, POPSPEC = ".MakeColor()");

/// Home address
Property Home As Address;

/// Next scheduled visit date.
Property NextVisit As %Date(FORMAT = 3, POPSPEC = ".MakeVisit()");

/// Memo field
Property Memo As %String(MAXLEN = 32000, POPSPEC = "Mission()");

/// Return a random color for data population.
Method MakeColor() As %String
{
	Quit $LG($LB("red","green","blue","black","orange","purple"),$R(6))
}

/// Return random birth date for data population.
Method MakeDOB() As %Date
{
	#; Make a random date within past 60 years
	Quit +$H - $R(365*60)
}

/// Return random visit date for data population.
Method MakeVisit() As %Date
{
	#; Make a random date within next year
	Quit +$H + $R(365)
}

Storage Default
{
<Data name="PatientDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>DOB</Value>
</Value>
<Value name="3">
<Value>FavoriteColor</Value>
</Value>
<Value name="4">
<Value>Home</Value>
</Value>
<Value name="5">
<Value>Name</Value>
</Value>
<Value name="6">
<Value>SSN</Value>
</Value>
<Value name="7">
<Value>MaritalStatus</Value>
</Value>
<Value name="8">
<Value>Sex</Value>
</Value>
<Value name="9">
<Value>Memo</Value>
</Value>
<Value name="10">
<Value>NextVisit</Value>
</Value>
</Data>
<DataLocation>^ZENDemo.Data.PatientD</DataLocation>
<DefaultData>PatientDefaultData</DefaultData>
<ExtentSize>1000</ExtentSize>
<IdLocation>^ZENDemo.Data.PatientD</IdLocation>
<IndexLocation>^ZENDemo.Data.PatientI</IndexLocation>
<Property name="%%CLASSNAME">
<AverageFieldSize>1</AverageFieldSize>
<OutlierSelectivity>.992632:</OutlierSelectivity>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="%%ID">
<AverageFieldSize>2.87</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="DOB">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>0.1117%</Selectivity>
</Property>
<Property name="FavoriteColor">
<AverageFieldSize>4.01</AverageFieldSize>
<Selectivity>16.6667%</Selectivity>
</Property>
<Property name="Home">
<AverageFieldSize>36.12,City:7.35,State:2,Street:16.45,ZIP:5</AverageFieldSize>
<Selectivity>0.1000%,City:3.9095%,State:1.8424%,Street:0.1000%,ZIP:0.1000%</Selectivity>
</Property>
<Property name="MaritalStatus">
<AverageFieldSize>1</AverageFieldSize>
<Selectivity>20.0000%</Selectivity>
</Property>
<Property name="Memo">
<AverageFieldSize>91.47</AverageFieldSize>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="Name">
<AverageFieldSize>16.32</AverageFieldSize>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="NextVisit">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>0.3593%</Selectivity>
</Property>
<Property name="SSN">
<AverageFieldSize>11</AverageFieldSize>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="Sex">
<AverageFieldSize>1</AverageFieldSize>
<Selectivity>33.3333%</Selectivity>
</Property>
<SQLMap name="$Patient">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="CityIdx">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="IDKEY">
<BlockCount>-108</BlockCount>
</SQLMap>
<SQLMap name="NameIdx">
<BlockCount>-16</BlockCount>
</SQLMap>
<SQLMap name="SSNIdx">
<BlockCount>-16</BlockCount>
</SQLMap>
<SQLMap name="SexIdx">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="StateIdx">
<BlockCount>-4</BlockCount>
</SQLMap>
<StreamLocation>^ZENDemo.Data.PatientS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}
