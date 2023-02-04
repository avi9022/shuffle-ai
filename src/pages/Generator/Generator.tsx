import { FunctionComponent } from 'react'
import { DynamicGenerator } from '../../components/DynamicGenerator/DynamicGenerator'
import { GeneratorSideNav } from '../../components/GeneratorSideNav/GeneratorSideNav'

import './Generator.css'

export const Generator: FunctionComponent = () => {
  return (
    <div className="generator-container text-white">
      <div className="row w-100 bg-dark h-100 m-0 border-top border-white border-1">
        <div className="col-12 col-md-2 side-nav">
          <GeneratorSideNav />
        </div>
        <div className="col-12 col-md-6">
          <DynamicGenerator />
        </div>
        <div className="col-12 col-md-4 p-4">text</div>
      </div>
    </div>
  )
}
