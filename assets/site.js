(function(){
var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
document.querySelectorAll('.dd > button').forEach(function(x){x.addEventListener('click',function(e){e.preventDefault();var p=x.parentNode,o=p.classList.toggle('open');x.setAttribute('aria-expanded',o)})});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="tel:"]');if(a&&typeof gtag==='function'){gtag('event','call_click',{event_category:'lead',event_label:location.pathname})}});
})();
