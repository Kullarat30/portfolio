import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';
import profile from './assets/profile.png'
import axios from 'axios';

const endpoint = 'https://sheetdb.io/api/v1/xy9jp2v8n33zt'

function App() {
  const [hide, setHide] = useState(false)
  const [data, setData] = useState([])
  
  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
    })
    console.log('success', d)
  }

  useEffect(() =>{
    callApi()
  },[])

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image={profile}/>

        <Title title="Kullarat Poonsawat (Ning)">
          <h3>Graphic Design</h3>
        </Title>

        <Title title="Contact">
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/05/30").format("D MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66615584977
          </p>
          <button onClick={() => setHide(!hide)}>{hide ? 'Show': 'Hide'}</button>
          <p>Email : kullaratsp@gmail.com</p>
          <p>www.kullaratsp.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde, quis at cum aliquam culpa id doloremque, delectus aspernatur recusandae eius quidem eligendi nesciunt a perferendis, labore inventore! Est, optio!</p>
        </Title>

        <Title title="Work Experience">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, fuga neque? Voluptatibus officiis distinctio placeat nulla nobis numquam culpa, illum recusandae? Deleniti debitis cum voluptatem earum dolores nisi nostrum at!</p>
        </Title>

        <Title title="Skills">
          <p>• Microsoft Office</p>
          <p>• Adobe Photoshop</p>
          <p>• Adobe Illustrator</p>
          <p>• Network</p>
        </Title>

      </div>
    </main>
  )
}

export default App
