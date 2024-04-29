function rgbToHex(r, g, b) {

    // let hexadecimal = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    // return hexadecimal.toUpperCase();

    const toHex = (c) => {

        if(c > 0 && c <= 255) {
            
            return c.toString(16).padStart(2, '0');
        }

        if(c > 255) {
            return c = "FF";
        }

        else {
            return c = "00";
        }
    }  
    return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

rgbToHex(0, 0, -20);