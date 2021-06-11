
document.addEventListener("DOMContentLoaded", function () {
    var friends = ['Olivia', 'Michael', 'Thomas', 'Drew', 'Katie'];
    var locations = ['bathroom', 'kitchen', 'lounge', 'library', 'bed room', 'parlor', 'living room', 'garage', 'alley', 'back yard'];
    var weapons = ['dagger', 'bat', 'club', 'ice pick', 'flame thrower', 'shoe', 'scarf', 'poison', 'mallet', 'hot poker', 'pistol', 'shotgun', 'shark tooth', 'razor', 'rope', 'kitchen shears', 'Holy Spirit', 'TV', 'guitar', 'lamp'];

    for (var i = 0; i < 100; i++) {
        var accusationH3 = document.createElement("h3");
        accusationH3.textContent = `Accusation ${i}`;
        var alertFuncWithIndex = captureIndex(i);
        accusationH3.addEventListener("click", alertFuncWithIndex);
        document.body.appendChild(accusationH3);

    }

    function captureIndex(i) {
        return function () {
            alert(`Accusation ${i}: I accuse ${friends[i % 5]}, with the ${weapons[i % 20]}, in the ${locations[i % 10]}!`);
        }
    }
});