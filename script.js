// Business data with +44 added to all phone numbers
const businesses = [
    { city: "London", address: "79 London Road, Croydon, CR0 2RF", phone: "+44 7392 455288", person: "Kak Miran" },
    { city: "London", address: "88 St Johns Avenue, Harlesden, NW10 4EG", phone: "+44 7392 455288", person: "Kak Karwan" },
    { city: "Birmingham", address: "62A Anne Road, Smethwick, B66 2NY", phone: "+44 7474 908176", person: "Kak Dara" },
    { city: "Brighton", address: "2 Rock Street, Brighton, BN2 1NF", phone: "+44 7474 432624", person: "Aram" },
    { city: "Bristol", address: "313 Two Mill Hill Road, Bristol, BS151AP", phone: "+44 7763 795785", person: "K Shalaw Wakil" },
    { city: "Burton on Trent", address: "13 Northumberland Road, Burton on Trent, DE15 9JQ", phone: "+44 7515 008701", person: "Kak Shorish" },
    { city: "Cardiff", address: "165 City Road, Cardiff, CF24 3BQ", phone: "+44 7399 810664", person: "Kak Kaifi" },
    { city: "Coventry", address: "145 Foleshill Road, Coventry, CV1 4LF", phone: "+44 7522 011514", person: "Ramzy" },
    { city: "Derby", address: "176 Normanton Road, Derby, DE23 6UX", phone: "+44 7404 704692", person: "Kak Bakir" },
    { city: "Doncaster", address: "24 Beckett Road, Doncaster, DN2 4AD", phone: "+44 7806 677674", person: "Kak Kawa" },
    { city: "Edinburgh", address: "149 Granton Road, Edinburgh, EH5 3NL", phone: "+44 7716 661099", person: "Kak Saiwan" },
    { city: "Glasgow", address: "1401 Maryhill Road, Glasgow, G20 9AA", phone: "+44 7727 266895", person: "Kak Mohammed" },
    { city: "Gravesend", address: "3 Darnley Rd, Gravesend, Kent, DA11 0RU", phone: "+44 7522 521026", person: "Mam Hozan" },
    { city: "Hastings", address: "19 Norman Road, St Leonards-on-sea, East Sussex, TN37 6NH", phone: "+44 7411 910429", person: "Kak Shaxawan" },
    { city: "Huddersfield", address: "6 Bradford Road, Huddersfield, HD16HY", phone: "+44 7388 653033", person: "Kak Sirwan" },
    { city: "Hull", address: "123 Spring Bank, HU3 1BH", phone: "+44 7383 688766", person: "Kak Sami" },
    { city: "Ipswich", address: "14 St. Matthews Street, Ipswich, IP1 3EU", phone: "+44 7550 555559", person: "Kak Muhammad" },
    { city: "Kent", address: "Unit X, Paddock Wood Distribution Centre Transfesa Road, Paddock Wood, Kent, TN12 6UU", phone: "+44 7722 335573", person: "Warehouse" },
    { city: "Leeds", address: "1 Dolly Line, Leeds, LS9 7EB", phone: "+44 7713 474140", person: "Kak Sirwan" },
    { city: "Leicester", address: "22 Lee Circle, Leicester, LE1 3RE", phone: "+44 7914 169335", person: "Kak Hadi" },
    { city: "Liverpool", address: "20 Lodge Lane, Liverpool, L8 0QH", phone: "+44 7874 224266", person: "Kak Bashdar" },
    { city: "Maidstone", address: "33-35 Upper Stone St, Maidstone, Kent, ME15 6EU", phone: "+44 7429 443912", person: "Rebwar Qamishi" },
    { city: "Manchester", address: "240A Furness Road Wilmslow, Followfield, Manchester, M14 6LD", phone: "+44 7770 326288", person: "Mala Nawzad" },
    { city: "Middlesborough", address: "17 Gresham Road, Middlesborough, TS1 4LY", phone: "+44 7944 245878", person: "Kak Abdullah" },
    { city: "Newcastle", address: "3 Two Ball Lonnen, Newcastle Upon Tyne, NE4 9RN", phone: "+44 7762 268615", person: "In&Out Store" },
    { city: "Norwich", address: "564 Dereham Road, Norwich, NR5 8TU", phone: "+44 7455 759641", person: "Mohammad" },
    { city: "Nottingham", address: "17 Salisbury Square, Radford, Nottingham, NG7 2AB", phone: "+44 7455 367567", person: "Kak Hemin" },
    { city: "Oxford", address: "293 Lffley Road, Oxford, OX4 4AQ", phone: "+44 7454 250055", person: "Miwan/ Amir" },
    { city: "Peterborough", address: "64/66 Dogsthorpe Road, Peterborough, PE1 3AQ", phone: "+44 7849 205799", person: "Mała Dlshad" },
    { city: "Sheffield", address: "115 Spital Hill, Sheffield, S4 7LD", phone: "+44 7466 993160", person: "Kak Yadgar" },
    { city: "Slough", address: "10 Alpha St, North, SL1 1RB", phone: "+44 7454 678071", person: "Kak Ahmad" },
    { city: "Southampton", address: "15 Romsey Road, SO164BY", phone: "+44 7863 503164", person: "Kak Karzan" },
    { city: "Southend on Sea", address: "84 Sutton Road, Southend on Sea, SS2 5EW", phone: "+44 7518 987129", person: "Mstafa/ Adam" },
    { city: "Stoke-on-Trent", address: "73 Trinity Street, Stoke on Trent, ST1 5NA", phone: "+44 7735 477682", person: "Shahryar" },
    { city: "Swansea", address: "The Kingsway, SA1 5LF", phone: "+44 7554 066441", person: "Kak Bawan" },
    { city: "Swindon", address: "95 Manchester Road, Swindon, SN1 2AJ", phone: "+44 7517 171111", person: "Kak Zana" },
    { city: "Wakefield", address: "41 Park Lodge Lane, Wakefield, WF1 4NN", phone: "+44 7588 083335", person: "Kak Abdullah" },
    { city: "Warrington", address: "Wash 4 You, 204 Orgord Lane, WA2 7BE", phone: "+44 7307 392907", person: "Kak Kawan" },
    { city: "Wigan", address: "Barakat Market, 36 Wigan Lane, Wigan, WN1 1XR", phone: "+44 7821 401192", person: "Kak Redar" },
    { city: "Worthing", address: "4-6 South Street, Worthing, BN14 7LH", phone: "+44 7784 334611", person: "Kak Shirwan" },
    { city: "Wolverhampton", address: "46 Newhampton Road West, Wolverhampton, WV6 0RY", phone: "+44 7786 424245", person: "Kak Dlshad & Kak Shwan" },
    { city: "Northampton", address: "111 Kettering Road, Northampton, NN1 4AZ", phone: "+44 7983 999363", person: "K Pasha" },
    { city: "Northampton", address: "111 Kettering Road, Northampton, NN1 4AZ", phone: "+44 7490 341423", person: "K Aram" }
];

// Populate the directory with business cards
function loadBusinessData() {
    const list = document.getElementById('businessList');
    businesses.forEach(business => {
        const businessItem = document.createElement('div');
        businessItem.classList.add('business-item');
        businessItem.innerHTML = `
            <h3>${business.city}</h3>
            <p><a href="https://www.google.com/maps?q=${encodeURIComponent(business.address)}" target="_blank">Address: ${business.address}</a></p>
            <p><a href="https://wa.me/${business.phone.replace(/\s/g, '')}">Phone: ${business.phone}</a></p>
            <p>Contact: ${business.person}</p>
        `;
        list.appendChild(businessItem);
    });
}

// Filter cities based on search input
function filterCities() {
    const query = document.getElementById('citySearch').value.toLowerCase();
    const filteredBusinesses = businesses.filter(business => business.city.toLowerCase().includes(query));

    // Clear previous results and display filtered businesses
    const list = document.getElementById('businessList');
    list.innerHTML = '';
    filteredBusinesses.forEach(business => {
        const businessItem = document.createElement('div');
        businessItem.classList.add('business-item');
        businessItem.innerHTML = `
            <h3>${business.city}</h3>
            <p><a href="https://www.google.com/maps?q=${encodeURIComponent(business.address)}" target="_blank">Address: ${business.address}</a></p>
            <p><a href="https://wa.me/${business.phone.replace(/\s/g, '')}">Phone: ${business.phone}</a></p>
            <p>Contact: ${business.person}</p>
        `;
        list.appendChild(businessItem);
    });
}

// Load all businesses on page load
window.onload = loadBusinessData;
