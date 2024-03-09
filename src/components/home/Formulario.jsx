
const numeros = [1,2,3,4,5,6,7,8,9,10];

export const Formulario = () => {

    return(
        <>
            <form>
                        
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="zip" required/>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="terms" required/>
                    <label className="form-check-label">I have read and agree to the <a href="#">terms and conditions</a></label>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Get My Free Kit</button>
                </div>
            </form>
        </>
    )
}