import React, { useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';
function App() {

   const [inputText, setInputText] = useState('');
   const [targetLang, setTargetLang] = useState(''); 
     const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);

 
//console.log(inputText);
//console.log(targetLang);

const handletextTranslation= async () => {
   setLoading(true);
  try {
    const options = {
  method: 'POST',
  url: 'https://free-google-translator.p.rapidapi.com/external-api/free-google-translator',
  params: {
    from: 'en',
    to: `${targetLang}`,
    query: `${inputText}`
  },
  headers: {
    'x-rapidapi-key': 'cb8659a635msh2159371e327fc81p1f8836jsn5c8c5fdc3fbf',
    'x-rapidapi-host': 'free-google-translator.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    translate: 'rapidapi'
  }
};

const response = await axios.request(options);
setLoading(false);
//console.log('Translation response:', response.data.translation);
setTranslatedText(response.data.translation);
}catch (error) {
    console.error('Translation failed:', error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">

      <div className="flex  items-center justify-center flex-col gap-y-10 " >
          <h1 className="text-3xl text-zinc-900 font-bold ">Text Translator</h1>
           <div className="flex items-center justify-center flex-col gap-y-5">
            <textarea name="input-text" placeholder='Type in English' className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-5" onChange={(e)=> setInputText(e.target.value)} />
           
            <textarea name="input-text" className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-5" value={translatedText} readOnly  />
            </div>

            <div>  
              <label htmlFor="options" className="text-xl font-semibold mr-5">Choose Language:</label>
              <select name="value" className="bg-white px-2 py-2 rounded-lg border border-zinc-700 outline-none cursor-pointer"onChange={(e)=> setTargetLang(e.target.value)} >
              <option value="">select</option>
               <option value="af">Afrikaans</option>
               <option value="sq">Albanian</option>
               <option value="am">Amharic</option>
               <option value="ar">Arabic</option>
               <option value="hy">Armenian</option>
               <option value="az">Azerbaijani</option>
               <option value="eu">Basque</option>
               <option value="be">Belarusian</option>
               <option value="bn">Bengali</option>
               <option value="bs">Bosnian</option>
               <option value="bg">Bulgarian</option>
               <option value="ca">Catalan</option>
               <option value="ceb">Cebuano</option>
               <option value="ny">Chichewa</option>
               <option value="zh-CN">Chinese (Simplified)</option>
               <option value="zh-TW">Chinese (Traditional)</option>
               <option value="co">Corsican</option>
               <option value="hr">Croatian</option>
               <option value="cs">Czech</option>
               <option value="da">Danish</option>
               <option value="nl">Dutch</option>
               <option value="en">English</option>
               <option value="eo">Esperanto</option>
               <option value="et">Estonian</option>
               <option value="tl">Filipino</option>
               <option value="fi">Finnish</option>
               <option value="fr">French</option>
               <option value="fy">Frisian</option>
               <option value="gl">Galician</option>
               <option value="ka">Georgian</option>
               <option value="de">German</option>
               <option value="el">Greek</option>
               <option value="gu">Gujarati</option>
               <option value="ht">Haitian Creole</option>
               <option value="ha">Hausa</option>
               <option value="haw">Hawaiian</option>
               <option value="iw">Hebrew</option>
               <option value="hi">Hindi</option>
               <option value="hmn">Hmong</option>
               <option value="hu">Hungarian</option>
               <option value="is">Icelandic</option>
               <option value="ig">Igbo</option>
               <option value="id">Indonesian</option>
               <option value="ga">Irish</option>
               <option value="it">Italian</option>
               <option value="ja">Japanese</option>
               <option value="jw">Javanese</option>
               <option value="kn">Kannada</option>
               <option value="kk">Kazakh</option>
               <option value="km">Khmer</option>
               <option value="rw">Kinyarwanda</option>
               <option value="ko">Korean</option>
               <option value="ku">Kurdish (Kurmanji)</option>
               <option value="ky">Kyrgyz</option>
               <option value="lo">Lao</option>
               <option value="la">Latin</option>
               <option value="lv">Latvian</option>
               <option value="lt">Lithuanian</option>
               <option value="lb">Luxembourgish</option>
               <option value="mk">Macedonian</option>
               <option value="mg">Malagasy</option>
               <option value="ms">Malay</option>
               <option value="ml">Malayalam</option>
               <option value="mt">Maltese</option>
               <option value="mi">Maori</option>
               <option value="mr">Marathi</option>
               <option value="mn">Mongolian</option>
               <option value="my">Myanmar (Burmese)</option>
               <option value="ne">Nepali</option>
               <option value="no">Norwegian</option>
               <option value="or">Odia (Oriya)</option>
               <option value="ps">Pashto</option>
               <option value="fa">Persian</option>
               <option value="pl">Polish</option>
               <option value="pt">Portuguese</option>
               <option value="pa">Punjabi</option>
               <option value="ro">Romanian</option>
               <option value="ru">Russian</option>
               <option value="sm">Samoan</option>
               <option value="gd">Scots Gaelic</option>
               <option value="sr">Serbian</option>
               <option value="st">Sesotho</option>
               <option value="sn">Shona</option>
               <option value="sd">Sindhi</option>
               <option value="si">Sinhala (Sinhalese)</option>
               <option value="sk">Slovak</option>
               <option value="sl">Slovenian</option>
               <option value="so">Somali</option>
               <option value="es">Spanish</option>
               <option value="su">Sundanese</option>
               <option value="sw">Swahili</option>
               <option value="sv">Swedish</option>
               <option value="tg">Tajik</option>
               <option value="ta">Tamil</option>
               <option value="te">Telugu</option>
               <option value="th">Thai</option>
               <option value="tr">Turkish</option>
               <option value="uk">Ukrainian</option>
               <option value="ur">Urdu</option>
               <option value="ug">Uyghur</option>
               <option value="uz">Uzbek</option>
               <option value="vi">Vietnamese</option>
               <option value="cy">Welsh</option>
               <option value="xh">Xhosa</option>
               <option value="yi">Yiddish</option>
               <option value="yo">Yoruba</option>
               <option value="zu">Zulu</option>
              </select>
            </div>
          <button className="bg-slate-700 text-slate-100 mx-auto w-[500px] py-2 rounded-lg cursor-pointer flex items-center justify-center" onClick={handletextTranslation}>{ loading ? <Loader className="mx-auto animate-spin" /> : 'Translate'}</button>
        </div>
     
    </div>
  );
}

export  default App;
