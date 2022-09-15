import Button from '@mui/material/Button';


export default function Navbar() {
    return (
        <>
            <div style={{ width: '100vw', height: '15vh', backgroundColor: '#4d94a1'}}>
                <div style={{
                    color: 'white',
                    fontSize: '35px',
                    height: '15vh',
                    display: 'flex',
                    alignItems: 'center',
                    width:'100vw',
                    justifyContent:'space-between',
                    
                }}>
                    <div style={{paddingLeft:'40px'}}>
                    Covid Risk Calculator
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginRight:'40px'
                    }}>Login | SignUp
                    </div>
                </div>
            </div>
        </>
    )
}