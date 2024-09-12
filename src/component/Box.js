import React from 'react'
const styles = {
    box : {
        padding : '2.5rem 6.5rem',

        background: 'rgba(233,233,233,0.5)',
        border: '1px solid #ffffff',
        borderRadius : '1rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    }
}
const Box = ({weather}) => {
  console.log('weather',weather);

  return (
    <div>
      <div style={styles.box}>
        <div style={styles.h2}>날씨날씨</div>
        <div>
          <div>지역 : {weather && weather.name}</div>
          {/* <div>지역 : {weather?.name}</div> */}
          <div>온도 : {weather?.main.temp}℃ / {weather && ((weather.main.temp) * 1.8) + 32}Ｆ</div>
          <div>상태 : {weather?.weather[0].description}</div>
        </div>
      </div>
    </div>
  )
}

export default Box
