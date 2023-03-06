import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { DynamicGenerator } from '../../components/DynamicGenerator/DynamicGenerator'
import { DynamicContent } from '../../components/GeneratedContent/DynamicContent'
import { GeneratorSideNav } from '../../components/GeneratorSideNav/GeneratorSideNav'
import './Generator.css'

export const Generator: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="generator-container h-100vh">
      <div className="row w-100 h-100 m-0 border-top border-white border-1">
        <div className="col-12 col-md-3 col-xxl-2 p-0">
          <GeneratorSideNav />
        </div>
        <div className="col-12 col-md-9 col-xxl-10 bg-light-gray px-4 pt-4">
          <div className="generator-top-nav d-flex w-100 justify-content-between align-items-center mb-4">
            <div>
              <h2 className="m-0">New Post</h2>
              <div className="text-grey">Generate new post for your single.</div>
            </div>
            <div className="d-flex align-items-center gap-5">
              <Button btnType="styleless" onClick={() => navigate('/')}>
                <div className="fs-sm before-arrow">Go To Shuffle Website</div>
              </Button>
              <Button btnType="brand">
                <div className="d-flex align-items-center text-white justify-content-between new-shuffle-btn">
                  <div className="px-3 fs-sm">New Shuffle AI</div>
                  <div className="border-start border-grey py-3 px-3 fs-sm">V</div>
                </div>
              </Button>
            </div>
          </div>
          <div className="d-flex gap-4">
            <div className="flex-grow-1 bg-white border rounded p-5 shadow h-100">
              <DynamicGenerator />
            </div>
            <div className=" bg-white border rounded p-4 shadow w-40">
              <DynamicContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
