import React from 'react'
import { certifications } from '../constants'

const Certifications = () => {
    return (
        <React.Fragment>
			<div id="certifications" className='mb-10'>
				<h2 className="section-heading">Certifications.</h2>
				<div className="certs-cont md:grid grid-cols-2 md:w-3/4 mx-auto gap-10 flex justify-center flex-col md:py-10 px-5">
					{certifications.map((certification) => (
						<CertificationCard key={certification.id} {...certification} />
					))}
				</div>
			</div>
        </React.Fragment>
    )
}

const CertificationCard = ({ id, title, provider, skills, url }) => {
	return <React.Fragment>
		<div className="cert-card double-dashed-border flex flex-col gap-2 justify-between">
			<h3 className="font-crt text-3xl font-bold">{title}</h3>
			<p className="font-mono text-xl font-semibold">From: {provider}</p>
			<div className="skills-cont flex flex-wrap items-center">
				{skills.map((skill) => (
					<p className="tags">{skill}</p>
				))}
			</div>
			<a href={url} target="_blank" rel="noopener noreferrer" className='card-btn w-full'>
				<div className="">View Certification</div>
			</a>
		</div>
	</React.Fragment>
}

export default Certifications
