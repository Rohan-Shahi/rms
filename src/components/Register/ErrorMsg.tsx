
export default function ErrorMsg(props:any) {
  return (
    <div style={{color: 'red', marginLeft : '0.5rem',fontSize: '0.8rem'}}>*{props.children}</div>
  )
}
