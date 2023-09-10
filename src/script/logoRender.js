function pluginLogoRender () {
    let logoType = document.querySelectorAll('#logoType');

    logoType.forEach((image) => {
        image.src ='./src/images/76017481.png';
        image.atl = 'Code Craft';
    })
}

export default pluginLogoRender