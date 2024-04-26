import React from 'react';
import './Part.css';
import { ProjectData as Project } from '../../assets/project';
import Card from './Card';

const Part = () => {
    return (
        <div className="card-body">
            <div className="mx-3 flex items-center justify-between mb-2">
                <h5 className="text-xl font-bold "><span className="text-base-content opacity-70">Github Projects</span></h5>
                <a href="https://github.com/Prateekyadav01?tab=repositories" target="_blank" rel="noreferrer" className="text-base-content opacity-50 hover:underline">See All</a>
            </div>
            <div className="flex flex-wrap gap-7">
                {
                    Project.map((project, index) => (
                        <Card data={project} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default Part;
