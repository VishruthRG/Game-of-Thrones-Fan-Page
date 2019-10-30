var main_form = document.createElement("form");
main_form.setAttribute("action","quiz.php");
main_form.setAttribute("method","post");
main_form.appendChild(q1);
document.body.appendChild(main_form);

var next_button = document.createElement("button");
next_button.setAttribute("value","NEXT");
next_button.style.setAttribute("backgroundColor","blue");
next_button.addEventListener(click,obj.to_next,false);

var prev_button = document.createElement("button");
prev_button.setAttribute("value","PREVIOUS");
prev_button.style.setAttribute("backgroundColor","blue");
prev_button.addEventListener(click,obj.to_next,false);

var q1 = document.createElement("div");
q1.appendChild(next_button);
q1.appendChild(prev_button);

