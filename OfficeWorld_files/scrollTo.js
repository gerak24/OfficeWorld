document.addEventListener("click", (e) => {
    const targetNode = e.target.closest('a')
    if (targetNode && targetNode.dataset.href[0] === '#') {
        
        let href = targetNode.getAttribute('data-href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
})



