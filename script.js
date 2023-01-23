const meni = document.getElementById('meni');
const strelica = document.getElementById('strelica');

const pokreni_meni = () => {
    meni.classList.toggle('otvoreno');
    strelica.innerHTML = 
        !meni.classList.contains('otvoreno')
            ? "expand_more"
            : "close";
};

const klik_na_kontrolnu_tablu = () => {
    alert('Kliknuli ste na kontrolnu tablu!')
};
const klik_na_meni = () => {
    pokreni_meni();
    alert('Meni dugme je kliknuto!')
}