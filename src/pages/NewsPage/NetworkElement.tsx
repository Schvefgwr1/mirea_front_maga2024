export default function NetworkElement({color, logo}: {color: string, logo: string}) {
    return (
        <div className="network-element" style={{backgroundColor: color}}>
            <img src={logo} alt=""/>
        </div>
    )
}