import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-5 footer">
            <div className="container pt-5">
                <div className="row mb-5">
                    <div className="col-md-6 col-12">
                        <h1 className="font-weight-bold mb-4">Let us handle your project <br/> professionally</h1>
                        <p>With well written codes. we build amazing apps for all platforms,<br/>mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 col-12">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your email address"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your name/Company's name"/>
                        </div>
                        <div class="form-group">
                             <textarea class="form-control" rows="5" placeholder="Your message"></textarea>
                         </div>
                         <button className="btn-brand px-5">Send</button>
                    </form>
                    </div>
                </div>
                <p className="text-center pt-5 pb-2">Copyright Orange labs 2020</p>
            </div>
        </footer>
    );
};

export default Footer;