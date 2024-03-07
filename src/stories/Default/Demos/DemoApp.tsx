import * as React from 'react';
import { Grid, MantineProvider, Text, Title } from '@mantine/core';
import { DevTools, DevToolsProps } from '../../../';
import { Async } from './Async';
import { Counter } from './Counter';
import { DemoJotaiStoreContext, demoStore } from './demo-store';
import { Random } from './Random';
import { Todos } from './Todos';
// import { Button } from "@/components/ui/button"
// import { Button } from "src/components/ui/button"
import { Button } from '/Users/adamkim/jotai-devtools/src/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '/Users/adamkim/jotai-devtools/src/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '/Users/adamkim/jotai-devtools/src/components/ui/card';
import { Input } from '/Users/adamkim/jotai-devtools/src/components/ui/input';
import { Label } from '/Users/adamkim/jotai-devtools/src/components/ui/label';

export const DemoApp = (props: DevToolsProps) => {
  return (
    <DemoJotaiStoreContext.Provider value={demoStore}>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          primaryColor: 'dark',
          cursorType: 'pointer',
        }}
      >
        <DevTools store={demoStore} {...props} />
        <div className="App">
          <React.Suspense
            fallback={
              <Text className="loading-suspense">
                Your suspense loading component...
              </Text>
            }
          >
            <Title size="h3">Demos</Title>
            <Text mb={10} color="dark.2">
              Jotai DevTools — Early Previewzzzzzz!!
            </Text>
            <Grid gutter="xl">
              <Grid.Col span={6}>
                <Random />
              </Grid.Col>
              <Grid.Col span={6}>
                <Counter />
              </Grid.Col>
              <Grid.Col span={6}>
                <Todos />
              </Grid.Col>{' '}
              <Grid.Col span={6}>
                <Async />
              </Grid.Col>
            </Grid>
          </React.Suspense>
        </div>
      </MantineProvider>
    </DemoJotaiStoreContext.Provider>
  );
};
