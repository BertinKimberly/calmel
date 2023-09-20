import Typography from 'antd/es/typography/Typography'
import React from 'react'

function AppFooter() {
  return (
    <div className='AppFooter'>
     <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
     <Typography.Link href="https://www.google.com/" target={'blank'}>Privacy Policy</Typography.Link>
     <Typography.Link href="https://www.google.com/"  target={'blank'}>Terms of use</Typography.Link>
    </div>
  )
}

export default AppFooter
