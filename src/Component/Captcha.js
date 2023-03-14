import Captcha from 'captcha-image';
import './Styles/LoginPage.css';

const captchaImage = new Captcha(
  '35px Arial',
  'center',
  'middle',
  300,
  150,
  '#eee',
  '#111',
  6
).createImage();


function createMarkup(source) {
  return { __html: source };
}

function MyCaptcha() {
  return <div dangerouslySetInnerHTML={createMarkup(captchaImage)} />;
}

function App() {
  return (
    <div className='Captcha'>
      <MyCaptcha />
    </div>
  );
}

export default App;