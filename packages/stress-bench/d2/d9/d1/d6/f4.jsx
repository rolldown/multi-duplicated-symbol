
  import React, { useContext, useEffect } from 'react'
  import I from '@iconify-icons/material-symbols/crop-7-5-outline.js'
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
  