"use client"
import {ThemeProvider} from 'next-themes';


function providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider
  enableSystems={true}
  attribute="class"
  >
    {children}

  </ThemeProvider>;
}

export default providers;
