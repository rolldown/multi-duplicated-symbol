import React, { useContext, useEffect } from 'react'
  import I from '@iconify-icons/material-symbols/format-letter-spacing-2-outline-rounded.js'
  import { Icon } from '@iconify/react/dist/offline';
  
  function Component({ show }) {
  
    return (
      <div className={styles.navbar}>
        
        
				<Icon
					icon={I}
				/>
      </div>
    )
  }
  
  export default Component