jQuery-Visibly
==============

A jQuery Plugin designed to easily show elements based on values of other elements

## Documentation

### Setup
```javascript
$('[data-visibly]').Visibly(options);
```


### Options
```javascript
clearOnHide: false,  //Clear the data from the elements on hide
data: 'visibly', //Data attribute to use for the visibly data
vdelim: ',', //Delimeter used to split the values a control can hold
edelim: ':', //Delimeter between the field ID and the values
fdelim: ';' //Delimeter between the fields
```

## Examples

``` 
<div visibly="field1:a,b;field2:1"></div> 
```

The above rule will make the relevant element visible is the value of field1 is either 'a' or 'b' and field2 has value of '1'

_Further examples and demos coming soon_

## Help
Rule builder is in development, hope to have released shortly!

## Planned features (Code submissions welcome)

- Muliple rules for a field
- Empty / Not empty 
- Regular expression matching
