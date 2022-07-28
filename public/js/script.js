$(document).ready(() => {
    $('#top-navbar-search-btn').click(() => {
        $('#top-navbar-search-form').toggle(200)
    })
    $('#top-navbar-item-dropdown').hover(()=> {
        $('#top-navbar-item-dropdown-menu').toggle(500)
    })
})