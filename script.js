'use strict';
var stor, color, price = 0;
var resp = true;

while (true) {
    stor = +prompt('What storage volume you prefer? 16, 32 or 64Gb?');
    if (stor == 16 || stor == 32 || stor == 64) {
        switch (stor) {
            case 16:
                price = 600;
                break;
            case 32:
                price = 800;
                break;
            case 64:
                price = 1000;
                break;

        }
        break;
    } else if (stor==0 || stor==null) {
        resp = false;
        break;

    } else {
        alert('We don`t have phones with this storage volume');
    }

}

while (resp == true) {
    color = prompt('What color you prefer? Black, silver or red?', '');
    if (color == 'black' || color == 'silver' || color == 'red' ) {
        switch (color) {
            case 'black':
                price;
                break;
            case 'silver':
                price = price + 200;
                break;
            case 'red':
                price = price + 500;
                break;
            }
        break;
    } else if (color == 0 || color == null) {
        resp = false;
        break;

    } else {
        alert('We don`t have phones of this color');
    }
}
if (resp == true) {
    document.write('<p>Storage: ' + stor + 'Gb' + '</p>');
    document.write('<p>Your phone color: ' + color + '</p>');
    document.write('<div><img src="img/' + color + '.png" width="500px" </div>');
    document.write('<p>Price: ' + price + '$</p>');
}
