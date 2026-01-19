import React from 'react'
import { socials } from '../constants'

const Contact = () => {
	return (
		<React.Fragment>
			<h2 className="section-heading">Lets Work Together.</h2>
			<div className="certs-cont md:grid grid-cols-2 md:w-3/4 w-full mx-auto gap-10 flex justify-center flex-col md:py-10 px-5">
				<div className="social-links flex flex-col gap-5 w-full">
					{socials.map((social) => (
						<a target='_blank' href={social.url} className="social-cont" key={social.id}>
							<div className="social-cont-contents">
								<social.logo />
								<div className="">{social.name}</div>
							</div>	
						</a>
					))}
				</div>
				<form action="" className='double-dashed-border flex flex-col items-center justify-around'>
					<div className="input-field-cont">
						<label htmlFor="name">Your Name</label>
						<input type="text" name="name" id="name" required className='input-field' />
					</div>
					<div className="input-field-cont">
						<label htmlFor="email">Your Email</label>
						<input type="email" name="email" id="email" required className='input-field' />
					</div>
					<div className="input-field-cont">
						<label htmlFor="message">Your Message</label>
						<textarea name="message" id="message" cols="30" rows="5" className='input-field'></textarea>
					</div>
				</form>
			</div>
		</React.Fragment>
	)
}

export default Contact