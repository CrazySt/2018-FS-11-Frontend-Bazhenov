const say = function (name){
    var div = document.createElement('div');
    var body = document.getElementById('body');
    div.className = "my_div";
    div.innerHTML = "<p>Some text</p> <style> background: 111111#; </style>";
    body.appendChild(div);
};
export default say;
