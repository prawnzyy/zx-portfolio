export default function scrollWithPadding(id:string, offset = 20) {
    const target = document.getElementById(id);
    const targetPosition = Number(target?.getBoundingClientRect().top) - offset + window.scrollY;
    window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth'
    });
}