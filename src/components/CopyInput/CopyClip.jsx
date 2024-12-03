import React from 'react'
import {createPortal} from 'react-dom'
const CopyClip = ({time}) => {
  return createPortal(
    <section>
        {
            time && (
                <p>Copied on Clipboad</p>
            )
        }
    </section>,
    document.querySelector('#popUp')
  )
}

export default CopyClip