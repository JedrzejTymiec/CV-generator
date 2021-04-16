function switchMainPageLanguage(language) {
  localStorage.setItem("language", language);
  if (language === "polish") {
    //MAIN PAGE POLISH
    document.querySelector(".select-title").innerHTML =
      "Klon generatora CV</br>z Pracuj.pl";
    document.querySelector(
      "#new-button h5"
    ).innerHTML = `<i class="fas fa-check"></i>Stwórz nowe`;
    document.querySelector(
      "#edit-link h5"
    ).innerHTML = `<i class="fas fa-check"></i>Edytuj zapisane`;
    document.querySelector(".choose-title-container h4").innerText =
      "Wybierz szblon i kolor";
    document.querySelector("#basic div").innerText = "Podstawowy";
    document.querySelector("#simple div").innerText = "Prosty";
    document.querySelector("#executive div").innerText = "Wykonawczy";
    document.querySelector("#college div").innerText = "Studencki";
    document.querySelector("#creative div").innerText = "Kreatywny";
    document.querySelector("#professional div").innerText = "Profesjonalny";
    document.querySelector("#modern div").innerText = "Nowoczesny";
    document.querySelector("#functional div").innerText = "Funkcjonalny";
    document.querySelector(
      ".next-button h5"
    ).innerHTML = `Dalej<i class="fas fa-arrow-right"></i>`;
    document.querySelector(".footer-text").innerText = "Stworzone przez ";
  } else if (language === "english") {
    //MAIN PAGE ENGLISH
    document.querySelector(".select-title").innerHTML =
      "Pracuj.pl </br>CV generator clone";
    document.querySelector(
      "#new-button h5"
    ).innerHTML = `<i class="fas fa-check"></i>Create new`;
    document.querySelector(
      "#edit-link h5"
    ).innerHTML = `<i class="fas fa-check"></i>Edit saved`;
    document.querySelector(".choose-title-container h4").innerText =
      "Choose template & color";
    document.querySelector("#basic div").innerText = "Basic";
    document.querySelector("#simple div").innerText = "Simple";
    document.querySelector("#executive div").innerText = "Executive";
    document.querySelector("#college div").innerText = "College";
    document.querySelector("#creative div").innerText = "Creative";
    document.querySelector("#professional div").innerText = "Professional";
    document.querySelector("#modern div").innerText = "Modern";
    document.querySelector("#functional div").innerText = "Functional";
    document.querySelector(
      ".next-button h5"
    ).innerHTML = `Next<i class="fas fa-arrow-right"></i>`;
    document.querySelector(".footer-text").innerText = "Created by ";
  }
}

function switchAppPageLanguage(language, currentPage) {
  localStorage.setItem("language", language);
  if (language === "polish") {
    //WARNING MODAL
    document.querySelector("#warning-modal h1").innerText =
      "Czy na pewno chcesz usunąć to CV?";
    document.querySelector("#warning-modal .close-modal").innerText = "Anuluj";
    document.querySelector("#delete-cv-button").innerText = "Usuń";
    //EXPERIENCE MODAL
    document.querySelector(
      "#experience-modal .modal-header h1:first-child"
    ).innerText = "Doświadczenie zawodowe - nowa pozycja";
    document.getElementById("position-input-label").innerText = "Stanowisko*";
    document.getElementById("company-input-label").innerText = "Firma*";
    document.getElementById("expstart-input-label").innerText =
      "Data rozpoczęcia*";
    document.getElementById("expend-input-label").innerText =
      "Data zakończenia*";
    document.getElementById("expcheck-label").innerText = "Ciągle pracuję";
    document.getElementById("expdescription-input-label").innerText = "Opis";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Zapisz";
    //EDUCATION MODAL
    document.querySelector(
      "#education-modal .modal-header h1:first-child"
    ).innerText = "Wykształcenie - nowa pozycja";
    document.getElementById("school-input-label").innerText = "Nazwa szkoły*";
    document.getElementById("specialization-input-label").innerText =
      "Kierunek";
    document.getElementById("edustart-input-label").innerText =
      "Data rozpoczęcia*";
    document.getElementById("eduend-input-label").innerText =
      "Data zakończenia*";
    document.getElementById("educheck").innerText = "Ciągle się uczę";
    document.getElementById("edudescription-input-label").innerText = "Opis";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Zapisz";
    //CERTIFICATION MODAL
    document.querySelector(
      "#certification-modal .modal-header h1:first-child"
    ).innerText = "Certyfikaty - nowa pozycja";
    document.getElementById("certname-label").innerText = "Nazwa*";
    document.getElementById("organizer-label").innerText = "Organizator*";
    document.getElementById("certdate-label").innerText = "Data uczestnictwa*";
    document.getElementById("cerdescription-label").innerText = "Opis";
    document.querySelector(
      "#certification-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector(
      "#certification-modal .modal-footer button"
    ).innerText = "Zapisz";
    //PROJECTS MODAL
    document.querySelector(
      "#projects-modal .modal-header h1:first-child"
    ).innerText = "Projekty - nowa pozycja";
    document.getElementById("projectname-label").innerText = "Nazwa*";
    document.getElementById("prodescription-label").innerText = "Opis";
    document.querySelector(
      "#projects-modal .modal-footer .close-modal"
    ).innerText = "Anuluj";
    document.querySelector("#projects-modal .modal-footer button").innerText =
      "Zapisz";
    //APP
    document.querySelector(".header-text").innerText =
      "Klon generatora CV z Pracuj.pl";
    document.getElementById("basic-dot-label").innerText = "Podstawowe dane";
    document.getElementById("experience-dot-label").innerText = "Doświadczenie";
    document.getElementById("skills-dot-label").innerText = "Umiejętności";
    document.getElementById("download-dot-label").innerText = "Pobierz CV";
    document.querySelector(".templates-container h4:first-child").innerText =
      "Wybrany szablon";
    document.getElementById("basic").innerText = "Podstawowy";
    document.getElementById("simple").innerText = "Prosty";
    document.getElementById("executive").innerText = "Wykonawczy";
    document.getElementById("college").innerText = "Studencki";
    document.getElementById("creative").innerText = "Kreatywny";
    document.getElementById("professional").innerText = "Profesjonalny";
    document.getElementById("modern").innerText = "Nowoczesny";
    document.getElementById("functional").innerText = "Funkcjonalny";
    document.querySelector(".templates-container h4:nth-child(3)").innerText =
      "Wybrany kolor";
    document.querySelector(".skills-container .section-title").innerText =
      "UMIEJĘTNOŚCI";
    document.querySelector(".experience-container .section-title").innerText =
      "DOŚWIADCZENIE ZAWODOWE";
    document.querySelector(".education-container .section-title").innerText =
      "WYKSZTAŁCENIE";
    document.querySelector(
      ".certifications-container .section-title"
    ).innerText = "CERTYFIKATY";
    document.querySelector(".languages-container .section-title").innerText =
      "JĘZYKI";
    document.querySelector(".projects-container .section-title").innerText =
      "PROJEKTY";
    document.querySelector(".footer-container .footer-text").innerText =
      "Stworzone przez ";
    //BASIC FORM
    if (currentPage === "basic") {
      document.querySelector("#basic-data-form h1:first-child").innerText =
        "Zdjęcie";
      document.querySelector(".photo-toggle-container h4").innerText =
        "Pokaż zdjęcie w CV";
      document.querySelector(
        "#image-field .input-placeholder"
      ).innerHTML = `Upuść plik</br> lub kliknij aby przesłać`;
      document.querySelector("#basic-data-form h1:nth-child(4)").innerText =
        "Podstawowe dane";
      document.getElementById("name-input-label").innerText = "Imię*";
      document.getElementById("surname-input-label").innerText = "Nazwisko*";
      document.getElementById("proffesion-input-label").innerText = "Zawód";
      document.getElementById("about-input-label").innerText = "O sobie";
      document.querySelector(
        "#basic-data-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector("#residence-form .form-title").innerText =
        "Miejsce zamieszkania";
      document.getElementById("country-input-label").innerText = "Kraj*";
      document.getElementById("city-input-label").innerText = "Miasto*";
      document.querySelector(
        "#residence-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector("#contact-form .form-title").innerText =
        "Dane kotaktowe";
      document.getElementById("phone-input-label").innerText =
        "Numer telefonu*";
      document.getElementById("linkedin-input-label").innerText =
        "Link do linkedin";
      document.getElementById("github-input-label").innerText =
        "Link do github";
      document.querySelector(
        "#contact-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector("#contact-form h4:last-child").innerText =
        "* Pola wymagane";
      document.querySelector(
        ".next-button"
      ).innerHTML = `Dalej<i class="fas fa-arrow-right"></i>`;
      document.getElementById(
        "country-input"
      ).innerHTML = `<option selected="selected" value=""> - </option>
      <option value="Afganistan">Afganistan</option>
      <option value="Albania">Albania</option>
      <option value="Algieria">Algieria</option>
      <option value="Andora">Andora</option>
      <option value="Angola">Angola</option>
      <option value="Anguilla">Anguilla</option>
      <option value="Antigua i Barbuda">Antigua i Barbuda</option>
      <option value="Antyle Holenderskie">Antyle Holenderskie</option>
      <option value="Arabia Saudyjska">Arabia Saudyjska</option>
      <option value="Argentyna">Argentyna</option>
      <option value="Armenia">Armenia</option>
      <option value="Aruba">Aruba</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Azerbejdżan">Azerbejdżan</option>
      <option value="Bahamy">Bahamy</option>
      <option value="Bahrajn">Bahrajn</option>
      <option value="Bangladesz">Bangladesz</option>
      <option value="Barbados">Barbados</option>
      <option value="Belgia">Belgia</option>
      <option value="Belize">Belize</option>
      <option value="Benin">Benin</option>
      <option value="Bermudy">Bermuday</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Białoruś">Białoruś</option>
      <option value="Birma">Birma</option>
      <option value="Boliwia">Boliwia</option>
      <option value="Bonaire">Bonaire</option>
      <option value="Bośnia i Hercegowina">Bośnia i Hercegowina</option>
      <option value="Botswana">Botswana</option>
      <option value="Brazylia">Brazylia</option>
      <option value="Brunei">Brunei</option>
      <option value="Brytyjskie Terytorium Oceanu Indyjskiego">
        Brytyjskie Terytorium Oceanu Indyjskiego
      </option>
      <option value="Brytyjskie Wyspy Dziewicze">Brytyjskie Wyspy Dziewicze</option>
      <option value="Bułgaria">Bułgaria</option>
      <option value="Burkina Faso">Burkina Faso</option>
      <option value="Burundi">Burundi</option>
      <option value="Chile">Chile</option>
      <option value="Chiny">Chiny</option>
      <option value="Chorwacja">Chorwacja</option>
      <option value="Curacao">Curacao</option>
      <option value="Cypr">Cypr</option>
      <option value="Czad">Czad</option>
      <option value="Czarnogóra">Czarnogóra</option>
      <option value="Czechy">Czechy</option>
      <option value="Dania">Dania</option>
      <option value="Dominika">Dominika</option>
      <option value="Dominikana">Dominikana</option>
      <option value="Dżibuti">Dżibuti</option>
      <option value="Egipt">Egipt</option>
      <option value="Ekwador">Ekwador</option>
      <option value="Erytrea">Erytrea</option>
      <option value="Estonia">Estonia</option>
      <option value="Etiopia">Etiopia</option>
      <option value="Falklandy">Falklandy</option>
      <option value="Fidżi">Fidżi</option>
      <option value="Filipiny">Filipiny</option>
      <option value="Finlandia">Finlandia</option>
      <option value="Francja">Francja</option>
      <option value="Francuskie Terytoria Południowe i Antarktyczne">
        Francuskie Terytoria Południowe i Antarktyczne
      </option>
      <option value="Gabon">Gabon</option>
      <option value="Gambia">Gambia</option>
      <option value="Georgia">Georgia</option>
      <option value="Ghana">Ghana</option>
      <option value="Gibraltar">Gibraltar</option>
      <option value="Grecja">Grecja</option>
      <option value="Grenada">Grenada</option>
      <option value="Grenlandia">Grenlandia</option>
      <option value="Guam">Guam</option>
      <option value="Gujana Francuska">Gujana Francuska</option>
      <option value="Gujana">Gujana</option>
      <option value="Gwadelupa">Gwadelupa</option>
      <option value="Gwatemala">Gwatemala</option>
      <option value="Gwinea Równikowa">Gwinea Równikowa</option>
      <option value="Gwinea">Gwinea</option>
      <option value="Haiti">Haiti</option>
      <option value="Hawaje">Hawaje</option>
      <option value="Hiszpania">Hiszpania</option>
      <option value="Holandia">Holandia</option>
      <option value="Honduras">Honduras</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="Indie">Indie</option>
      <option value="Indonezja">Indonezja</option>
      <option value="Irak">Irak</option>
      <option value="Iran">Iran</option>
      <option value="Irlandia">Irlandia</option>
      <option value="Islandia">Islandia</option>
      <option value="Izrael">Izrael</option>
      <option value="Jamajka">Jamajka</option>
      <option value="Japonia">Japonia</option>
      <option value="Jemen">Jemen</option>
      <option value="Jordania">Jordania</option>
      <option value="Kajmany">Kajmany</option>
      <option value="Kambodża">Kambodża</option>
      <option value="Kamerun">Kamerun</option>
      <option value="Kanada">Kanada</option>
      <option value="Katar">Katar</option>
      <option value="Kazachstan">Kazachstan</option>
      <option value="Kenia">Kenia</option>
      <option value="Kirgistan">Kirgistan</option>
      <option value="Kiribati">Kiribati</option>
      <option value="Kolumbia">Kolumbia</option>
      <option value="Komory">Komory</option>
      <option value="Kongo">Kongo</option>
      <option value="Korea Południowa">Korea Południowa</option>
      <option value="Korea Północna">Korea Północna</option>
      <option value="Kostaryka">Kostaryka</option>
      <option value="Kuba">Kuba</option>
      <option value="Kuwejt">Kuwejt</option>
      <option value="Laos">Laos</option>
      <option value="Lesotho">Lesotho</option>
      <option value="Liban">Liban</option>
      <option value="Liberia">Liberia</option>
      <option value="Libia">Libia</option>
      <option value="Liechtenstein">Liechtenstein</option>
      <option value="Litwa">Litwa</option>
      <option value="Luksemburg">Luksemburg</option>
      <option value="Łotwa">Łotwa</option>
      <option value="Macedonia">Macedonia</option>
      <option value="Madagaskar">Madagaskar</option>
      <option value="Majotta">Majotta</option>
      <option value="Makau">Makau</option>
      <option value="Malawi">Malawi</option>
      <option value="Malediwy">Malediwy</option>
      <option value="Malezja">Malezja</option>
      <option value="Mali">Mali</option>
      <option value="Malta">Malta</option>
      <option value="Man">Man</option>
      <option value="Maroko">Maroko</option>
      <option value="Martinika">Martinika</option>
      <option value="Mauretania">Mauretania</option>
      <option value="Mauritius">Mauritius</option>
      <option value="Meksyk">Meksyk</option>
      <option value="Midway">Midway</option>
      <option value="Mołdawia">Mołdawia</option>
      <option value="Monako">Monako</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Montserrat">Montserrat</option>
      <option value="Mozambik">Mozambik</option>
      <option value="Namibia">Namibia</option>
      <option value="Nauru">Nauru</option>
      <option value="Nepal">Nepal</option>
      <option value="Nevis">Nevis</option>
      <option value="Niemcy">Niemcy</option>
      <option value="Niger">Niger</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Nikaragua">Nikaragua</option>
      <option value="Niue">Niue</option>
      <option value="Norfolk">Norfolk</option>
      <option value="Norwegia">Norwegia</option>
      <option value="Nowa Kaledonia">Nowa Kaledonia</option>
      <option value="Nowa Zelandia">Nowa Zelandia</option>
      <option value="Oman">Oman</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Palau">Palau</option>
      <option value="Palestyna">Palestyna</option>
      <option value="Panama">Panama</option>
      <option value="Papua-Nowa Gwinea">Papua-Nowa Gwinea</option>
      <option value="Paragwaj">Paragwaj</option>
      <option value="Peru">Peru</option>
      <option value="Pitcairn">Pitcairn</option>
      <option value="Polinezja Francuska">Polinezja Francuska</option>
      <option value="Polska">Polska</option>
      <option value="Portoryko">Portoryko</option>
      <option value="Portugalia">Portugalia</option>
      <option value="Republika Południowej Afryki">
        Republika Południowej Afryki
      </option>
      <option value="Republika Środkowoafrykańska">
        Republika Środkowoafrykańska
      </option>
      <option value="Reunion">Reunion</option>
      <option value="Rosja">Rosja</option>
      <option value="Rumunia">Rumunia</option>
      <option value="Rwanda">Rwanda</option>
      <option value="Saint Kitts i Nevis">Saint Kitts i Nevis</option>
      <option value="Saint Lucia">Saint Lucia</option>
      <option value="Saint Vincent i Grenadyny">Saint Vincent i Grenadyny</option>
      <option value="Saipan">Saipan</option>
      <option value="Salwador">Salwador</option>
      <option value="Samoa Amerykańskie">Samoa Amerykańskie</option>
      <option value="Samoa">Samoa</option>
      <option value="San Marino">San Marino</option>
      <option value="Senegal">Senegal</option>
      <option value="Serbia">Serbia</option>
      <option value="Seszele">Seszele</option>
      <option value="Sierra Leone">Sierra Leone</option>
      <option value="Singapur">Singapur</option>
      <option value="Sint Eustatius">Sint Eustatius</option>
      <option value="Sint Maarten">Sint Maarten</option>
      <option value="Słowacja">Słowacja</option>
      <option value="Słowenia">Słowenia</option>
      <option value="Somalia">Somalia</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Stany Zjednoczone">Stany Zjednoczone</option>
      <option value="Suazi">Suazi</option>
      <option value="Sudan">Sudan</option>
      <option value="Surinam">Surinam</option>
      <option value="Syria">Syria</option>
      <option value="Szwajcaria">Szwajcaria</option>
      <option value="Szwecja">Szwecja</option>
      <option value="Święta Helena">Święta Helena</option>
      <option value="Tadżykistan">Tadżykistan</option>
      <option value="Tahiti">Tahiti</option>
      <option value="Tajlandia">Tajlandia</option>
      <option value="Tajwan">Tajwan</option>
      <option value="Tanzania">Tanzania</option>
      <option value="Timor Wschodni">Timor Wschodni</option>
      <option value="Togo">Togo</option>
      <option value="Tokelau">Tokelau</option>
      <option value="Tonga">Tonga</option>
      <option value="Trynidad i Tobago">Trynidad i Tobago</option>
      <option value="Tunezja">Tunezja</option>
      <option value="Turcja">Turcja</option>
      <option value="Turkmenistan">Turkmenistan</option>
      <option value="Turks i Caicos">Turks i Caicos</option>
      <option value="Tuvalu">Tuvalu</option>
      <option value="Uganda">Uganda</option>
      <option value="Ukraina">Ukraina</option>
      <option value="Uragwaj">Uruguwaj</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="Wake">Wake</option>
      <option value="Wallis i Futuna">Wallis i Futuna</option>
      <option value="Watykan">Watykan</option>
      <option value="Wenezuela">Wenezuela</option>
      <option value="Węgry">Węgry</option>
      <option value="Wielka Brytania">Wielka Brytania</option>
      <option value="Wietnam">Wietnam</option>
      <option value="Włochy">Włochy</option>
      <option value="Wspólnota Saint-Barthélemy">Wspólnota Saint-Barthélemy</option>
      <option value="Wspólnota Terytorialna Saint Pierre i Miquelon">
        Wspólnota Terytorialna Saint Pierre i Miquelon
      </option>
      <option value="Wybrzeże Kości Słoniowej">Wybrzeże Kości Słoniowej</option>
      <option value="Wyspa Bożego Narodzenia">Wyspa Bożego Narodzenia</option>
      <option value="Wyspy Cooka">Wyspy Cooka</option>
      <option value="Wyspy Dziewicze">Wyspy Dziewicze</option>
      <option value="Wyspy Kanaryjskie">Wyspy Kanaryjskie</option>
      <option value="Wyspy Kokosowe">Wyspy Kokosowe</option>
      <option value="Wyspy Marshalla">Wyspy Marshalla</option>
      <option value="Wyspy Normandzkie">Wyspy Normandzkie</option>
      <option value="Wyspy Owcze">Wyspy Owcze</option>
      <option value="Wyspy Salomona">Wyspy Salomona</option>
      <option value="Wyspy Świętego Tomasza i Książęca">
        Wyspy Świętego Tomasza i Książęca
      </option>
      <option value="Wyspy Zielonego Przylądka">Wyspy Zielonego Przylądka</option>
      <option value="Zair">Zair</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
      <option value="Zjednoczone Emiraty Arabskie">
        Zjednoczone Emiraty Arabskie
      </option>
      `;
      //EXPERIENCE FORM
    } else if (currentPage === "experience") {
      document.querySelector("#form-container h1:first-child").innerText =
        "Doświadczenie zawodowe";
      document.querySelector(
        "#form-container button:nth-child(3)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Dodaj`;
      document.querySelector("#form-container h1:nth-child(4)").innerText =
        "Wykształcenie";
      document.querySelector(
        "#form-container button:nth-child(6)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Dodaj`;
      document.querySelector("#form-container h1:nth-child(7)").innerText =
        "Projekty";
      document.querySelector(
        "#form-container button:nth-child(9)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Dodaj`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Wróć`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Dalej<i class="fas fa-arrow-right"></i>`;
      //SKILLS FORM
    } else if (currentPage === "skills") {
      document.querySelector("#language-form .form-title").innerText = "Języki";
      document.querySelector(
        "#language-form .form-group:nth-child(3) label"
      ).innerText = "Język";
      document.querySelector(
        "#language-form .form-group:nth-child(4) label"
      ).innerText = "Poziom";
      document.querySelector(
        "#language-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Dodaj`;
      document.querySelector("#skills-form .form-title").innerText =
        "Umiejętności";
      document.querySelector(
        "#skills-form .form-group:nth-child(3) label"
      ).innerText = "Umiejętność";
      document.querySelector(
        "#skills-form .form-group:nth-child(4) label"
      ).innerText = "Poziom";
      document.querySelector(
        "#skills-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Dodaj`;
      document.querySelector(
        "#form-container .form-title:nth-child(3)"
      ).innerText = "Certyfikaty";
      document.querySelector(
        "#form-container .open-modal"
      ).innerHTML = `<i data-modal="certification" class="fas fa-plus"></i>Dodaj`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Wróć`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Gotowe<i class="fas fa-arrow-right"></i>`;
      document.getElementById(
        "language-input"
      ).innerHTML = `<option selected="selected" value="">-</option>
      <option value="Afrykanerski">Afrykanerski</option>
      <option value="Albański">Albański</option>
      <option value="Angielski">Angielski</option>
      <option value="Arabski">Arabski</option>
      <option value="Armeński">Armeński</option>
      <option value="Baskijski">Baskijski</option>
      <option value="Bengalski">Bengalski</option>
      <option value="Bułgarski">Bułgarski</option>
      <option value="Chiński (Mandaryński)">Chiński (Mandaryński)</option>
      <option value="Chorwacki">Chorwacki</option>
      <option value="Czeski">Czeski</option>
      <option value="Duński">Duński</option>
      <option value="Estoński">Estoński</option>
      <option value="Fidżyjski">Fidżyjski</option>
      <option value="Fiński">Fiński</option>
      <option value="Francuski">Francuski</option>
      <option value="Grecki">Grecki</option>
      <option value="Gruziński">Gruziński</option>
      <option value="Gudżarati">Gudżarati</option>
      <option value="Hebrajski">Hebrajski</option>
      <option value="Hinduski">Hinduski</option>
      <option value="Hiszpański">Hiszpański</option>
      <option value="Holenderski">Holenderski</option>
      <option value="Indonezyjski">Indonezyjski</option>
      <option value="Irlandzki">Irlandzki</option>
      <option value="Islandzki">Islandzki</option>
      <option value="Japoński">Japoński</option>
      <option value="Jawajski">Jawajski</option>
      <option value="Kambodżański">Kambodżański</option>
      <option value="Kataloński">Kataloński</option>
      <option value="Keczua">Keczua</option>
      <option value="Koreański">Koreański</option>
      <option value="Litewski">Litewski</option>
      <option value="Łacina">Łacina</option>
      <option value="Łotewski">Łotewski</option>
      <option value="Macedoński">Macedoński</option>
      <option value="Malajalam">Malajalam</option>
      <option value="Malajski">Malajski</option>
      <option value="Maltański">Maltański</option>
      <option value="Maoryski">Maoryski</option>
      <option value="Marathi">Marathi</option>
      <option value="Mongolski">Mongolski</option>
      <option value="Nepalski">Nepalski</option>
      <option value="Niemiecki">Niemiecki</option>
      <option value="Norweski">Norweski</option>
      <option value="Pendżabski">Pendżabski</option>
      <option value="Perski">Perski</option>
      <option value="Polski">Polski</option>
      <option value="Portugalski">Portugalski</option>
      <option value="Rosyjski">Rosyjski</option>
      <option value="Rumuński">Rumuński</option>
      <option value="Samoański">Samoański</option>
      <option value="Serbski">Serbski</option>
      <option value="Słowacki">Słowacki</option>
      <option value="Słoweński">Słoweński</option>
      <option value="Suahili">Suahili</option>
      <option value="Szwedzki">Szwedzki</option>
      <option value="Tajski">Tajski</option>
      <option value="Tamilski">Tamilski</option>
      <option value="Tatarski">Tatarski</option>
      <option value="Telugu">Telugu</option>
      <option value="Tonga">Tonga</option>
      <option value="Turecki">Turecki</option>
      <option value="Tybetański">Tybetański</option>
      <option value="Ukraiński">Ukraiński</option>
      <option value="Urdu">Urdu</option>
      <option value="Uzbecki">Uzbecki</option>
      <option value="Walijski">Walijski</option>
      <option value="Węgierski">Węgierski</option>
      <option value="Wietnamski">Wietnamski</option>
      <option value="Włoski">Włoski</option>
      <option value="Xhosa">Xhosa</option>
      `;
      document.getElementById(
        "language-level-input"
      ).innerHTML = `<option selected="selected" value="1A1/A2 - Początkujący">A1/A2 - Początkujący</option>
      <option value="2B1 - Średni">B1 - Średni</option>
      <option value="3B2 - Średniozawansowany">B2 - Średniozawansowany</option>
      <option value="4C1 - Zawansowany">C1 - Zawansowany</option>
      <option value="5C2 - Biegły">C2 - Biegły</option>`;
      //DOWNLOAD VIEW
    } else if (currentPage === "download") {
      document.querySelector(".download-wrapper h1").innerText = "Gratulacje!";
      document.querySelector(".download-wrapper h3").innerText =
        "Twoje CV jest gotowe!";
      document.querySelector(".download-wrapper h4:nth-child(3)").innerText =
        "Pobierz swoje CV w formacie PDF lub je zapisz";
      document.querySelector(".download-wrapper h4:nth-child(4)").innerText =
        "Wypełnij najpierw wymagane pola";
      document.getElementById(
        "download-button"
      ).innerHTML = `<i class="fas fa-download"></i>Pobierz`;
      document.getElementById(
        "save-cv-button"
      ).innerHTML = `<i class="far fa-save"></i>Zapisz`;
      document.querySelector(".cv-list-title").innerText = "Lista CV:";
      document.querySelector("#saved-cv-list p").innerText =
        "Brak zapisanych CV";
    }
  } else if (language === "english") {
    //WARNING MODAL
    document.querySelector("#warning-modal h1").innerText =
      "Are you sure you want to delete this CV?";
    document.querySelector("#warning-modal .close-modal").innerText = "Cancel";
    document.querySelector("#delete-cv-button").innerText = "Delete";
    //EXPERIENCE MODAL
    document.querySelector(
      "#experience-modal .modal-header h1:first-child"
    ).innerText = "Professional experience - new position";
    document.getElementById("position-input-label").innerText = "Position*";
    document.getElementById("company-input-label").innerText = "Company*";
    document.getElementById("expstart-input-label").innerText = "Start date*";
    document.getElementById("expend-input-label").innerText = "End date*";
    document.getElementById("expcheck-label").innerText = "Still working";
    document.getElementById("expdescription-input-label").innerText =
      "Description";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Save";
    //EDUCATION MODAL
    document.querySelector(
      "#education-modal .modal-header h1:first-child"
    ).innerText = "Education - new position";
    document.getElementById("school-input-label").innerText = "School name*";
    document.getElementById("specialization-input-label").innerText =
      "Specialization";
    document.getElementById("edustart-input-label").innerText = "Start date*";
    document.getElementById("eduend-input-label").innerText = "End date*";
    document.getElementById("educheck").innerText = "Still learning";
    document.getElementById("edudescription-input-label").innerText =
      "Description";
    document.querySelector(
      "#experience-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector("#experience-modal .modal-footer button").innerText =
      "Save";
    //CERTIFICATION MODAL
    document.querySelector(
      "#certification-modal .modal-header h1:first-child"
    ).innerText = "Certification - new position";
    document.getElementById("certname-label").innerText = "Name*";
    document.getElementById("organizer-label").innerText = "Organizer*";
    document.getElementById("certdate-label").innerText = "Participation date*";
    document.getElementById("cerdescription-label").innerText = "Description";
    document.querySelector(
      "#certification-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector(
      "#certification-modal .modal-footer button"
    ).innerText = "Save";
    document.querySelector(
      "#projects-modal .modal-header h1:first-child"
    ).innerText = "Projects - new position";
    document.getElementById("projectname-label").innerText = "Name*";
    document.getElementById("prodescription-label").innerText = "Description";
    document.querySelector(
      "#projects-modal .modal-footer .close-modal"
    ).innerText = "Cancel";
    document.querySelector("#projects-modal .modal-footer button").innerText =
      "Save";
    //APP
    document.querySelector(".header-text").innerText =
      "Pracuj.pl CV generator clone";
    document.getElementById("basic-dot-label").innerText = "Basic data";
    document.getElementById("experience-dot-label").innerText = "Experience";
    document.getElementById("skills-dot-label").innerText = "Skills";
    document.getElementById("download-dot-label").innerText = "Download CV";
    document.querySelector(".templates-container h4:first-child").innerText =
      "Choosen template";
    document.getElementById("basic").innerText = "Basic";
    document.getElementById("simple").innerText = "Simple";
    document.getElementById("executive").innerText = "Executive";
    document.getElementById("college").innerText = "College";
    document.getElementById("creative").innerText = "Creative";
    document.getElementById("professional").innerText = "Professional";
    document.getElementById("modern").innerText = "Modern";
    document.getElementById("functional").innerText = "Functional";
    document.querySelector(".templates-container h4:nth-child(3)").innerText =
      "Choosen color";
    document.querySelector(".skills-container .section-title").innerText =
      "SKILLS";
    document.querySelector(".experience-container .section-title").innerText =
      "WORK EXPERIENCE";
    document.querySelector(".education-container .section-title").innerText =
      "EDUCATION";
    document.querySelector(
      ".certifications-container .section-title"
    ).innerText = "CERTIFICATION";
    document.querySelector(".languages-container .section-title").innerText =
      "LANGUAGES";
    document.querySelector(".projects-container .section-title").innerText =
      "PROJECTS";
    document.querySelector(".footer-container .footer-text").innerText =
      "Created by ";
    //BASIC FORM
    if (currentPage === "basic") {
      document.querySelector("#basic-data-form h1:first-child").innerText =
        "Photo";
      document.querySelector(".photo-toggle-container h4").innerText =
        "Show photo in resume";
      document.querySelector(
        "#image-field .input-placeholder"
      ).innerHTML = `Drop file</br> or click to upload`;
      document.querySelector("#basic-data-form h1:nth-child(4)").innerText =
        "Basic data";
      document.getElementById("name-input-label").innerText = "Name*";
      document.getElementById("surname-input-label").innerText = "Surname*";
      document.getElementById("proffesion-input-label").innerText =
        "Proffesion";
      document.getElementById("about-input-label").innerText = "About yourself";
      document.querySelector(
        "#basic-data-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector("#residence-form .form-title").innerText =
        "Place of residence";
      document.getElementById("country-input-label").innerText = "Country*";
      document.getElementById("city-input-label").innerText = "City*";
      document.querySelector(
        "#residence-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector("#contact-form .form-title").innerText =
        "Contact data";
      document.getElementById("phone-input-label").innerText = "Phone number*";
      document.getElementById("linkedin-input-label").innerText =
        "Linkedin link";
      document.getElementById("github-input-label").innerText = "Github link";
      document.querySelector(
        "#contact-form .save-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector("#contact-form h4:last-child").innerText =
        "* Required fields";
      document.querySelector(
        ".next-button"
      ).innerHTML = `Next<i class="fas fa-arrow-right"></i>`;
      document.getElementById(
        "country-input"
      ).innerHTML = `<option selected="selected" value=""> - </option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="American Samoa">American Samoa</option>
      <option value="Andorra">Andorra</option>
      <option value="Angola">Angola</option>
      <option value="Anguilla">Anguilla</option>
      <option value="Antigua & Barbuda">Antigua & Barbuda</option>
      <option value="Argentina">Argentina</option>
      <option value="Armenia">Armenia</option>
      <option value="Aruba">Aruba</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Barbados">Barbados</option>
      <option value="Belarus">Belarus</option>
      <option value="Belgium">Belgium</option>
      <option value="Belize">Belize</option>
      <option value="Benin">Benin</option>
      <option value="Bermuda">Bermuda</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Bonaire">Bonaire</option>
      <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
      <option value="Botswana">Botswana</option>
      <option value="Brazil">Brazil</option>
      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
      <option value="Brunei">Brunei</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Burkina Faso">Burkina Faso</option>
      <option value="Burundi">Burundi</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Canada">Canada</option>
      <option value="Canary Islands">Canary Islands</option>
      <option value="Cape Verde">Cape Verde</option>
      <option value="Cayman Islands">Cayman Islands</option>
      <option value="Central African Republic">Central African Republic</option>
      <option value="Chad">Chad</option>
      <option value="Channel Islands">Channel Islands</option>
      <option value="Chile">Chile</option>
      <option value="China">China</option>
      <option value="Christmas Island">Christmas Island</option>
      <option value="Cocos Island">Cocos Island</option>
      <option value="Colombia">Colombia</option>
      <option value="Comoros">Comoros</option>
      <option value="Congo">Congo</option>
      <option value="Cook Islands">Cook Islands</option>
      <option value="Costa Rica">Costa Rica</option>
      <option value="Cote DIvoire">Cote DIvoire</option>
      <option value="Croatia">Croatia</option>
      <option value="Cuba">Cuba</option>
      <option value="Curaco">Curacao</option>
      <option value="Cyprus">Cyprus</option>
      <option value="Czech Republic">Czech Republic</option>
      <option value="Denmark">Denmark</option>
      <option value="Djibouti">Djibouti</option>
      <option value="Dominica">Dominica</option>
      <option value="Dominican Republic">Dominican Republic</option>
      <option value="East Timor">East Timor</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="El Salvador">El Salvador</option>
      <option value="Equatorial Guinea">Equatorial Guinea</option>
      <option value="Eritrea">Eritrea</option>
      <option value="Estonia">Estonia</option>
      <option value="Ethiopia">Ethiopia</option>
      <option value="Falkland Islands">Falkland Islands</option>
      <option value="Faroe Islands">Faroe Islands</option>
      <option value="Fiji">Fiji</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="French Guiana">French Guiana</option>
      <option value="French Polynesia">French Polynesia</option>
      <option value="French Southern Ter">French Southern Ter</option>
      <option value="Gabon">Gabon</option>
      <option value="Gambia">Gambia</option>
      <option value="Georgia">Georgia</option>
      <option value="Germany">Germany</option>
      <option value="Ghana">Ghana</option>
      <option value="Gibraltar">Gibraltar</option>
      <option value="Great Britain">Great Britain</option>
      <option value="Greece">Greece</option>
      <option value="Greenland">Greenland</option>
      <option value="Grenada">Grenada</option>
      <option value="Guadeloupe">Guadeloupe</option>
      <option value="Guam">Guam</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Guinea">Guinea</option>
      <option value="Guyana">Guyana</option>
      <option value="Haiti">Haiti</option>
      <option value="Hawaii">Hawaii</option>
      <option value="Honduras">Honduras</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="Hungary">Hungary</option>
      <option value="Iceland">Iceland</option>
      <option value="Indonesia">Indonesia</option>
      <option value="India">India</option>
      <option value="Iran">Iran</option>
      <option value="Iraq">Iraq</option>
      <option value="Ireland">Ireland</option>
      <option value="Isle of Man">Isle of Man</option>
      <option value="Israel">Israel</option>
      <option value="Italy">Italy</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Japan">Japan</option>
      <option value="Jordan">Jordan</option>
      <option value="Kazakhstan">Kazakhstan</option>
      <option value="Kenya">Kenya</option>
      <option value="Kiribati">Kiribati</option>
      <option value="Korea North">Korea North</option>
      <option value="Korea South">Korea South</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Kyrgyzstan">Kyrgyzstan</option>
      <option value="Laos">Laos</option>
      <option value="Latvia">Latvia</option>
      <option value="Lebanon">Lebanon</option>
      <option value="Lesotho">Lesotho</option>
      <option value="Liberia">Liberia</option>
      <option value="Libya">Libya</option>
      <option value="Liechtenstein">Liechtenstein</option>
      <option value="Lithuania">Lithuania</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Macau">Macau</option>
      <option value="Macedonia">Macedonia</option>
      <option value="Madagascar">Madagascar</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Malawi">Malawi</option>
      <option value="Maldives">Maldives</option>
      <option value="Mali">Mali</option>
      <option value="Malta">Malta</option>
      <option value="Marshall Islands">Marshall Islands</option>
      <option value="Martinique">Martinique</option>
      <option value="Mauritania">Mauritania</option>
      <option value="Mauritius">Mauritius</option>
      <option value="Mayotte">Mayotte</option>
      <option value="Mexico">Mexico</option>
      <option value="Midway Islands">Midway Islands</option>
      <option value="Moldova">Moldova</option>
      <option value="Monaco">Monaco</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Montserrat">Montserrat</option>
      <option value="Morocco">Morocco</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Myanmar">Myanmar</option>
      <option value="Nambia">Nambia</option>
      <option value="Nauru">Nauru</option>
      <option value="Nepal">Nepal</option>
      <option value="Netherland Antilles">Netherland Antilles</option>
      <option value="Netherlands">Netherlands (Holland, Europe)</option>
      <option value="Nevis">Nevis</option>
      <option value="New Caledonia">New Caledonia</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Niger">Niger</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Niue">Niue</option>
      <option value="Norfolk Island">Norfolk Island</option>
      <option value="Norway">Norway</option>
      <option value="Oman">Oman</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Palau Island">Palau Island</option>
      <option value="Palestine">Palestine</option>
      <option value="Panama">Panama</option>
      <option value="Papua New Guinea">Papua New Guinea</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Peru">Peru</option>
      <option value="Phillipines">Philippines</option>
      <option value="Pitcairn Island">Pitcairn Island</option>
      <option value="Poland">Poland</option>
      <option value="Portugal">Portugal</option>
      <option value="Puerto Rico">Puerto Rico</option>
      <option value="Qatar">Qatar</option>
      <option value="Republic of Montenegro">Republic of Montenegro</option>
      <option value="Republic of Serbia">Republic of Serbia</option>
      <option value="Reunion">Reunion</option>
      <option value="Romania">Romania</option>
      <option value="Russia">Russia</option>
      <option value="Rwanda">Rwanda</option>
      <option value="St Barthelemy">St Barthelemy</option>
      <option value="St Eustatius">St Eustatius</option>
      <option value="St Helena">St Helena</option>
      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
      <option value="St Lucia">St Lucia</option>
      <option value="St Maarten">St Maarten</option>
      <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
      <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
      <option value="Saipan">Saipan</option>
      <option value="Samoa">Samoa</option>
      <option value="San Marino">San Marino</option>
      <option value="Sao Tome & Principe">Sao Tome & Principe</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Senegal">Senegal</option>
      <option value="Seychelles">Seychelles</option>
      <option value="Sierra Leone">Sierra Leone</option>
      <option value="Singapore">Singapore</option>
      <option value="Slovakia">Slovakia</option>
      <option value="Slovenia">Slovenia</option>
      <option value="Solomon Islands">Solomon Islands</option>
      <option value="Somalia">Somalia</option>
      <option value="South Africa">South Africa</option>
      <option value="Spain">Spain</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Sudan">Sudan</option>
      <option value="Suriname">Suriname</option>
      <option value="Swaziland">Swaziland</option>
      <option value="Sweden">Sweden</option>
      <option value="Switzerland">Switzerland</option>
      <option value="Syria">Syria</option>
      <option value="Tahiti">Tahiti</option>
      <option value="Taiwan">Taiwan</option>
      <option value="Tajikistan">Tajikistan</option>
      <option value="Tanzania">Tanzania</option>
      <option value="Thailand">Thailand</option>
      <option value="Togo">Togo</option>
      <option value="Tokelau">Tokelau</option>
      <option value="Tonga">Tonga</option>
      <option value="Trinidad & Tobago">Trinidad & Tobago</option>
      <option value="Tunisia">Tunisia</option>
      <option value="Turkey">Turkey</option>
      <option value="Turkmenistan">Turkmenistan</option>
      <option value="Turks & Caicos Is">Turks & Caicos Is</option>
      <option value="Tuvalu">Tuvalu</option>
      <option value="Uganda">Uganda</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United Arab Erimates">United Arab Emirates</option>
      <option value="USA">USA</option>
      <option value="Uraguay">Uruguay</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="Vatican City State">Vatican City State</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
      <option value="Wake Island">Wake Island</option>
      <option value="Wallis & Futana Is">Wallis & Futana Is</option>
      <option value="Yemen">Yemen</option>
      <option value="Zaire">Zaire</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>`;
      //EXPERIENCE
    } else if (currentPage === "experience") {
      document.querySelector("#form-container h1:first-child").innerText =
        "Work experience";
      document.querySelector(
        "#form-container button:nth-child(3)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Add`;
      document.querySelector("#form-container h1:nth-child(4)").innerText =
        "Education";
      document.querySelector(
        "#form-container button:nth-child(6)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Add`;
      document.querySelector("#form-container h1:nth-child(7)").innerText =
        "Projects";
      document.querySelector(
        "#form-container button:nth-child(9)"
      ).innerHTML = `<i data-modal="experience" class="fas fa-plus"></i>Add`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Back`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Next<i class="fas fa-arrow-right"></i>`;
    } else if (currentPage === "skills") {
      document.querySelector("#language-form .form-title").innerText =
        "Languages";
      document.querySelector(
        "#language-form .form-group:nth-child(3) label"
      ).innerText = "Language";
      document.querySelector(
        "#language-form .form-group:nth-child(4) label"
      ).innerText = "Level";
      document.querySelector(
        "#language-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Add`;
      document.querySelector("#skills-form .form-title").innerText = "Skills";
      document.querySelector(
        "#skills-form .form-group:nth-child(3) label"
      ).innerText = "Skill";
      document.querySelector(
        "#skills-form .form-group:nth-child(4) label"
      ).innerText = "Level";
      document.querySelector(
        "#skills-form button"
      ).innerHTML = `<i class="fas fa-plus"></i>Add`;
      document.querySelector(
        "#form-container .form-title:nth-child(3)"
      ).innerText = "Certifications";
      document.querySelector(
        "#form-container .open-modal"
      ).innerHTML = `<i data-modal="certification" class="fas fa-plus"></i>Add`;
      document.querySelector(
        ".experience-form-footer .back"
      ).innerHTML = `<i class="fas fa-arrow-left"></i>Back`;
      document.querySelector(
        ".experience-form-footer a:nth-child(2) .next-button"
      ).innerHTML = `Done<i class="fas fa-arrow-right"></i>`;
      document.getElementById(
        "language-input"
      ).innerHTML = `<option selected="selected" value=""> - </option>
      <option value="Afrikaans">Afrikaans</option>
      <option value="Albanian">Albanian</option>
      <option value="Arabic">Arabic</option>
      <option value="Armenian">Armenian</option>
      <option value="Basque">Basque</option>
      <option value="Bengali">Bengali</option>
      <option value="Bulgarian">Bulgarian</option>
      <option value="Catalan">Catalan</option>
      <option value="Cambodian">Cambodian</option>
      <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
      <option value="Croatian">Croatian</option>
      <option value="Czech">Czech</option>
      <option value="Danish">Danish</option>
      <option value="Dutch">Dutch</option>
      <option value="English">English</option>
      <option value="Estonian">Estonian</option>
      <option value="Fiji">Fiji</option>
      <option value="Finnish">Finnish</option>
      <option value="French">French</option>
      <option value="Georgian">Georgian</option>
      <option value="German">German</option>
      <option value="Greek">Greek</option>
      <option value="Gujarati">Gujarati</option>
      <option value="Hebrew">Hebrew</option>
      <option value="Hindi">Hindi</option>
      <option value="Hungarian">Hungarian</option>
      <option value="Icelandic">Icelandic</option>
      <option value="Indonesian">Indonesian</option>
      <option value="Irish">Irish</option>
      <option value="Italian">Italian</option>
      <option value="Japanese">Japanese</option>
      <option value="Javanese">Javanese</option>
      <option value="Korean">Korean</option>
      <option value="Latin">Latin</option>
      <option value="Latvian">Latvian</option>
      <option value="Lithuanian">Lithuanian</option>
      <option value="Macedonian">Macedonian</option>
      <option value="Malay">Malay</option>
      <option value="Malayalam">Malayalam</option>
      <option value="Maltese">Maltese</option>
      <option value="Maori">Maori</option>
      <option value="Marathi">Marathi</option>
      <option value="Mongolian">Mongolian</option>
      <option value="Nepali">Nepali</option>
      <option value="Norwegian">Norwegian</option>
      <option value="Persian">Persian</option>
      <option value="Polish">Polish</option>
      <option value="Portuguese">Portuguese</option>
      <option value="Punjabi">Punjabi</option>
      <option value="Quechua">Quechua</option>
      <option value="Romanian">Romanian</option>
      <option value="Russian">Russian</option>
      <option value="Samoan">Samoan</option>
      <option value="Serbian">Serbian</option>
      <option value="Slovak">Slovak</option>
      <option value="Slovenian">Slovenian</option>
      <option value="Spanish">Spanish</option>
      <option value="Swahili">Swahili</option>
      <option value="Swedish">Swedish</option>
      <option value="Tamil">Tamil</option>
      <option value="Tatar">Tatar</option>
      <option value="Telugu">Telugu</option>
      <option value="Thai">Thai</option>
      <option value="Tibetan">Tibetan</option>
      <option value="Tonga">Tonga</option>
      <option value="Turkish">Turkish</option>
      <option value="Ukrainian">Ukrainian</option>
      <option value="Urdu">Urdu</option>
      <option value="Uzbek">Uzbek</option>
      <option value="Vietnamese">Vietnamese</option>
      <option value="Welsh">Welsh</option>
      <option value="Xhosa">Xhosa</option>`;
      document.getElementById(
        "language-level-input"
      ).innerHTML = `<option selected="selected" value="1A1/A2 - Beginner">A1/A2 - Beginner</option>
      <option value="2B1 - Intermediate">B1 - Intermediate</option>
      <option value="3B2 - Upper Intermediate">B2 - Upper Intermediate</option>
      <option value="4C1 - Advanced">C1 - Advanced</option>
      <option value="5C2 - Proficient">C2 - Proficient</option>`;
    } else if (currentPage === "download") {
      document.querySelector(".download-wrapper h1").innerText =
        "Congratulations!";
      document.querySelector(".download-wrapper h3").innerText =
        "Your CV is ready!";
      document.querySelector(".download-wrapper h4:nth-child(3)").innerText =
        "Download your CV as PDF file or save it";
      document.querySelector(".download-wrapper h4:nth-child(4)").innerText =
        "You need to fill required fields first";
      document.getElementById(
        "download-button"
      ).innerHTML = `<i class="fas fa-download"></i>Download`;
      document.getElementById(
        "save-cv-button"
      ).innerHTML = `<i class="far fa-save"></i>Save`;
      document.querySelector(".cv-list-title").innerText = "CV List:";
      document.querySelector("#saved-cv-list p").innerText = "No saved CV yet";
    }
  }
}

export { switchMainPageLanguage, switchAppPageLanguage };
