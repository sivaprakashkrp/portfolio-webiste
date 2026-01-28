import React from 'react'
import { socials } from '../constants'

const Contact = () => {
	return (
		<React.Fragment>
			<div id="contact" className='mb-10'>
				<h2 className="section-heading">Lets Work Together.</h2>
				<div className="certs-cont md:grid grid-cols-2 md:w-3/4 w-full mx-auto gap-10 flex justify-center flex-col md:py-10 px-5">
					<div className="social-links flex justify-center flex-col gap-5 w-full">
						<h3 className="font-mono text-2xl md:text-3xl text-center"> ~ My Socials ~ </h3>
						<div className="flex flex-col gap-5 md:grid grid-cols-2">
							{socials.map((social) => (
								<a target='_blank' href={social.url} className="social-cont" key={social.id}>
									<div className="social-cont-contents">
										<social.logo />
										<div className="">{social.name}</div>
									</div>
								</a>
							))}
						</div>
					</div>
					<div className="">
						<h3 className="font-mono text-2xl md:text-3xl text-center mb-5"> ~ Or Send a Message ~ </h3>
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
								<textarea name="message" id="message" cols="30" rows="5" className='input-field input-field-message'></textarea>
							</div>
							<button type='submit' className="submit-btn px-3 py-2 rounded-xl bg-terminal text-black font-mono font-semibold">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Contact