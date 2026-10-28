 const BooleanRendering = () => {
  let isActive = true
  return (<>
  <div className="bg-yellow-200 p-15">
    <div>
   {isActive? "This Is Booleanrendering":"This Is Not BooleanRendering"}
    </div>
  </div>
  
  
  </>
    
  )
}
export default BooleanRendering
