async function focusOnInput() {
    await new Promise(r => setTimeout(r, 200))
    document.getElementById('name').focus();
}