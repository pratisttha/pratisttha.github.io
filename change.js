function change()
    {
        var welcome = document.getElementById('here');
        welcome.style.color = 'white';
        alert('The color will changed to white.');
    }   
function validate()
{
    var full_name = document.forms["vd"]['full_name'].value
    if (full_name=="") 
    {
        alert ('Name must be entered.');
        return false;
    }
    else
    {
        alert("Welcome to art gallery " + full_name + ". Hope you enjoy!")
    }
}