
  import React, { useContext, useEffect } from 'react'
  import I from '@iconify-icons/material-symbols/language-us-dvorak-rounded.js'
  import { Icon } from '@iconify/react/dist/offline';
  import C0 from './d2/f0.jsx'
import C1 from './d2/f1.jsx'
import C2 from './d2/f2.jsx'
import C3 from './d2/f3.jsx'
import C4 from './d2/f4.jsx'
import C5 from './d2/f5.jsx'
import C6 from './d2/f6.jsx'
import C7 from './d2/f7.jsx'
import C8 from './d2/f8.jsx'
  function Component({ show }) {
  
    return (
      <div className={styles.navbar}>
        <C0/>
<C1/>
<C2/>
<C3/>
<C4/>
<C5/>
<C6/>
<C7/>
<C8/>
        
				<Icon
					icon={I}
				/>
      </div>
    )
  }
  
  export default Component 
  