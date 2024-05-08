<script>
const linkShare = {
    x: `https://twitter.com/intent/tweet/?text=${encodeURIComponent(document.title)}&url=${encodeURIComponent(window.location.href)}`,
    facebook: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    instagram: 'https://www.instagram.com',
    line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`,
}

const sns = ['x','facebook','line','instagram']
for (const element of sns){
    document.querySelector(`.${element} a`).href = linkShare[element]
}

</script>
