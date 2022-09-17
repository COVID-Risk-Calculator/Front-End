import Button from '@mui/material/Button';


export default function Navbar() {
    return (
        <>
            <div style={{ width: '100vw', height: '15vh', backgroundColor: '#4d94a1' }}>
                <div style={{
                    color: 'white',
                    fontSize: '35px',
                    height: '15vh',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100vw',
                    justifyContent: 'space-between',

                }}>
                    <div style={{ paddingLeft: '40px' }}>
                        Covid Risk Calculator
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'flex-end' }}>
                        <Button onClick={() => alert("You clicked Login")} style={{
                            color: 'inherit',
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '30px',
                            marginRight: '5px'
                        }} >Login </Button>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            |
                        </div>
                        <Button onClick={() => alert("You clicked Signup")} style={{
                            color: "inherit",
                            fontSize: '30px',
                            marginLeft: '5px',
                            marginRight: '30px'
                        }}>SignUp</Button>
                    </div>
                </div>
            </div>
        </>
    )
}