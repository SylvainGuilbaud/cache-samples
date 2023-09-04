/// A Customer invoice for testing reports against.
Class ZENApp.Report.Invoice Extends (%Persistent, %Populate) [ Inheritance = right ]
{

Index IdxSalesRep On SalesRep [ Type = bitmap ];

Index IdxCustomer On Customer [ Type = bitmap ];

Index IdxDate On SaleDate [ Type = bitmap ];

/// Customer name.
Property Customer As %String(MAXLEN = 100, POPSPEC = "Company()");

/// Sale's rep.
Property SalesRep As %String(MAXLEN = 100, POPSPEC = ".MakeSalesRep()");

/// Date on which this sale was reported.
Property SaleDate As %Date(FORMAT = 3, POPSPEC = ".MakeDate()");

/// Number used for aggregate testing.
Property Num As %Integer(MAXVAL = 10, MINVAL = 0);

/// Build sample data for the application
ClassMethod BuildData(pCount As %Integer = 1000)
{
	Do ..%KillExtent()
	Do ..Populate(pCount)
}

/// Return random date for data population.
Method MakeDate() As %Date
{
	#; Make a random date within year 2005
	Quit 59901 + $R(300) + $R(65)
}

/// Return random Sales rep name for data population.
Method MakeSalesRep() As %Date
{
	Set list = $LB("John","Jack","Jim","Joanne","Jen","Jill")
	Quit $LG(list,$R($LL(list))+1)
}

Storage Default
{
<Data name="InvoiceDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Customer</Value>
</Value>
<Value name="3">
<Value>SaleDate</Value>
</Value>
<Value name="4">
<Value>SalesRep</Value>
</Value>
<Value name="5">
<Value>Num</Value>
</Value>
</Data>
<DataLocation>^ZENApp.Report.InvoiceD</DataLocation>
<DefaultData>InvoiceDefaultData</DefaultData>
<ExtentSize>1000</ExtentSize>
<IdLocation>^ZENApp.Report.InvoiceD</IdLocation>
<IndexLocation>^ZENApp.Report.InvoiceI</IndexLocation>
<Property name="%%CLASSNAME">
<AverageFieldSize>1</AverageFieldSize>
<OutlierSelectivity>.992632:</OutlierSelectivity>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="%%ID">
<AverageFieldSize>2.94</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="Customer">
<AverageFieldSize>16.74</AverageFieldSize>
<Selectivity>0.1000%</Selectivity>
</Property>
<Property name="Num">
<AverageFieldSize>1.11</AverageFieldSize>
<Selectivity>9.0898%</Selectivity>
</Property>
<Property name="SaleDate">
<AverageFieldSize>5</AverageFieldSize>
<Selectivity>0.3102%</Selectivity>
</Property>
<Property name="SalesRep">
<AverageFieldSize>3.99</AverageFieldSize>
<Selectivity>16.6667%</Selectivity>
</Property>
<SQLMap name="$Invoice">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="IDKEY">
<BlockCount>-24</BlockCount>
</SQLMap>
<SQLMap name="IdxCustomer">
<BlockCount>-16</BlockCount>
</SQLMap>
<SQLMap name="IdxDate">
<BlockCount>-8</BlockCount>
</SQLMap>
<SQLMap name="IdxSalesRep">
<BlockCount>-4</BlockCount>
</SQLMap>
<StreamLocation>^ZENApp.Report.InvoiceS</StreamLocation>
<Type>%Library.CacheStorage</Type>
}

}
