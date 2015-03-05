jQuery-Visibly
==============

A jQuery Plugin designed to easily show elements based on values of other elements

## Documentation

### Setup
```javascript
$('[visibly]').Visibly();
```


### Options
```javascript
clearOnHide: false,  //Clear the data from the elements on hide
regularExpression, //This determines if regular expression is to be used for the test
attr: 'visibly', //Data attribute to use for the visibly data
vdelim: ',', //Delimeter used to split the values a control can hold
edelim: ':', //Delimeter between the field ID and the values
fdelim: ';' //Delimeter between the fields
rdelim: '%' //Delimeter between the rules
```

## Examples

``` 
<div visibly="field1:a,b;field2:1"></div> 
```

The above rule will make the relevant element visible is the value of field1 is either 'a' or 'b' and field2 has value of '1'

_Further examples and demos coming soon_

## Help
Full documentation can be found at: http://www.danielrivers.com/visibly