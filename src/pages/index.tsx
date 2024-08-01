import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [currentStatus, setCurrentStatus] = useState('allTab')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        {/* TABS */}
        <Tabs.Root
          className="TabsRoot"
          defaultValue="all"
          onValueChange={(val) => setCurrentStatus(val)}
        >
          <Tabs.List className="TabsList flex gap-4 py-6">
            <Tabs.Trigger
              className="TabsTrigger rounded-[1rem] border border-[#b2bec3] px-4 py-1.5 text-sm font-bold text-[gray-700] transition-[0.25s] data-[state=active]:border-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className="TabsTrigger rounded-[1rem] border border-[#b2bec3] px-4 py-1.5 text-sm font-bold text-[gray-700] transition-[0.25s] data-[state=active]:border-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className="TabsTrigger rounded-[1rem] border border-[#b2bec3] px-4 py-1.5 text-sm font-bold text-[gray-700] transition-[0.25s] data-[state=active]:border-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value={currentStatus}>
            <div className="pt-10">
              <TodoList status={currentStatus} />
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
