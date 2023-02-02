import { FunctionComponent } from 'react'
import { DynamicGenerator } from '../../components/DynamicGenerator/DynamicGenerator'
import { GeneratorSideNav } from '../../components/GeneratorSideNav/GeneratorSideNav'

import './Generator.css'

export const Generator: FunctionComponent = () => {
  return (
    <div className="generator-container text-white">
      <div className="row w-100 bg-dark h-100 m-0 p-5">
        <div className="col-2">
          <GeneratorSideNav />
        </div>
        <div className="col-6">
          <DynamicGenerator />
        </div>
        <div className="col-4">text</div>
      </div>
    </div>
  )
}
