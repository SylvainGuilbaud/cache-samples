/// Sample data for Zen sample pages.
Class ZENDemo.Data.Employee Extends (%Persistent, %Populate) [ Inheritance = right ]
{

/// Index on name
Index NameIdx On Name;

/// Index on active flag
Index ActiveIdx On Active [ Type = bitmap ];

Property Name As %String(MAXLEN = 100) [ Required ];

Property Title As %String(MAXLEN = 100);

Property SSN As %String(MAXLEN = 15);

Property Salary As %Numeric(MINVAL = 0);

Property Active As %Boolean;

/// Random number field used to demonstrate table refresh!
Property Ranking As %Integer [ Calculated, SqlComputeCode = { Set {Ranking}=$Random(100) }, SqlComputed ];

Property FavoriteColor As %String(MAXLEN = 25, POPSPEC = ".GenColor()", VALUELIST = ",red,green,blue,black");

Property HireDate As %Date(FORMAT = 3, POPSPEC = ".MakeDate()");

Property FireDate As %Date(FORMAT = 3, POPSPEC = ".MakeDate()");

Property Home As Address;

Property KeyWords As list Of %String;

Method GenColor() As %String
{
	Quit $LG($LB("red","green","blue","black"),$R(5))
}

/// This user callback is invoked when the form bound to this class
/// is submitted.
Method %OnSubmit(pSubmit As %ZEN.Submit) As %Status
{
	#; fill in properties !!!
	Set ..Name = pSubmit.%GetValue("Name")
	If (pSubmit.%GetValue("Ranking")>90) {
		Do pSubmit.%SetError("Ranking","OUT OF RANGE")
	}
	
	Quit ..%Save()
}

Query ListEmployees(City As %String = "", Title As %String = "") As %SQLQuery(CONTAINID = 1)
{
SELECT ID,Name,Title,Home_City FROM Employee
 WHERE (Home_City %STARTSWITH :City)
 ORDER BY Name
}

/// Return random date for data population.
Method MakeDate() As %Date
{
	#; Make a random date within past 2 years
	Quit +$H - $R(365*2)
}

/// A sample SQL function used for some of the demo queries against
/// this class.
ClassMethod Cube(val As %Integer) As %Integer [ SqlProc ]
{
    Quit val * val * val
}

Storage Default
{
<Data name="EmployeeDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>FavoriteColor</Value>
</Value>
<Value name="3">
<Value>FireDate</Value>
</Value>
<Value name="4">
<Value>HireDate</Value>
</Value>
<Value name="5">
<Value>Home</Value>
</Value>
<Value name="6">
<Value>Name</Value>
</Value>
<Value name="7">
<Value>SSN</Value>
</Value>
<Value name="8">
<Value>Title</Value>
</Value>
<Value name="9">
<Value>CField</Value>
</Value>
<Value name="10">
<Value>Nombre</Value>
</Value>
<Value name="11">
<Value>HealthPlan</Value>
</Value>
<Value name="12">
<Value>KeyWords</Value>
</Value>
<Value name="13">
<Value>Salary</Value>
</Value>
<Value name="14">
<Value>Active</Value>
</Value>
</Data>
<DataLocation>^ZENDemo.Data.EmployeeD</DataLocation>
<DefaultData>EmployeeDefaultData</DefaultData>
<ExtentSize>1000</ExtentSize>
<IdLocation>^ZENDemo.Data.EmployeeD</IdLocation>
<IndexLocation>^ZENDemo.Data.EmployeeI</IndexLocation>
<Property name="%%CLASSNAME">
<AverageFieldSize>1</AverageFieldSize>
<OutlierSelectivity>.992632:</OutlierSelectivity>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="%%ID">
<AverageFieldSize>2.91</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="Active">
<AverageFieldSize>1</AverageFieldSize>
<Selectivity>49.9999%</Selectivity>
</Property>
<Property name="FavoriteColor">
<AverageFieldSize>3.41</AverageFieldSize>
<Selectivity>20.0000%</Selectivity>
</Property>
<Property name="FireDate">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>0.2232%</Selectivity>
</Property>
<Property name="HireDate">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>0.2232%</Selectivity>
</Property>
<Property name="Home">
<AverageFieldSize>36.19,City:7.04,State:2,Street:16.85,ZIP:5</AverageFieldSize>
<Selectivity>0.1000%,City:3.7436%,State:2.1207%,Street:0.1000%,ZIP:0.1000%</Selectivity>
</Property>
<Property name="KeyWords">
<AverageFieldSize>36.91</AverageFieldSize>
<Selectivity>0.2041%</Selectivity>
</Property>
<Property name="Name">
<AverageFieldSize>15.61</AverageFieldSize>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="Nombre"/>
<Property name="Ranking">
<AverageFieldSize>1.91</AverageFieldSize>
<Selectivity>0.9802%</Selectivity>
</Property>
<Property name="SSN">
<AverageFieldSize>11</AverageFieldSize>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="Salary">
<AverageFieldSize>6.69</AverageFieldSize>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="Title">
<AverageFieldSize>21.57</AverageFieldSize>
<Selectivity>0.6858%</Selectivity>
</Property>
<SQLMap name="$Employee">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="ActiveIdx">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="IDKEY">
<BlockCount>-92</BlockCount>
</SQLMap>
<SQLMap name="NameIdx">
<BlockCount>-12</BlockCount>
</SQLMap>
<StreamLocation>^ZENDemo.Data.EmployeeS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}
