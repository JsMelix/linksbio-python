import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import Script from "next/script"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Box>
  <Script strategy={`afterInteractive`}>
  {`document.documentElement.lang='es'`}
</Script>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Sebastian`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`X-e II`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Sebastian X-e II`} size={`xl`} src={`logo.png`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Sebastian X-e II`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@CarpioWeen1`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/JsMelix`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`GitHub`} src={`icons/github.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/CarpioWeen1`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Twitter/X`} src={`icons/x.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://instagram.com/thesebastianxeii`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Instagram`} src={`icons/instagram.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://tiktok.com/@sebastiangamerxeii`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`TikTok`} src={`icons/tiktok.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://open.spotify.com/show/0m5roRLD2lRCFXc2bBnrdc`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Spotify`} src={`icons/spotify.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://linkedin.com/in/sebastianmelo03`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`LinkedIn`} src={`icons/linkedin.svg`} sx={{"width": "1.5em", "height": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`13+`}
</Text>
  {` hackatones`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`5+`}
</Text>
  {` aplicaciones creadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {``}
</Text>
  {` `}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`
             Soy Desarrollador de Software Educacion Autodidacta
             Lenguajes Python e IA.
            Además, creo contenido formativo sobre programación en redes.
            Aquí podrás encontrar todos los enlaces de interés ¡Charlemos!
            `}
</Text>
</VStack>
  <VStack>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Progreso`}
</Heading>
  <Link as={NextLink} href={`https://www.infobae.com/colombia/2023/07/02/mas-de-500-jovenes-colombianos-se-graduaron-en-inteligencia-artificial-y-programacion/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Programa Jovenes Samsung Innovation Campus`} src={`icons/infobae.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Programa Jovenes Samsung Innovation Campus`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Python - Alianza con la U Rosario`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://educonrosario.evolutool.com/index.php/6fe238abab086f347e5f52ade5889a36/8c787fa03757e6a235070c267cbd6989?fbclid=IwAR2cY24QYGbR9G2u6aWBgouLZOh4aMrHu9r_Vyu0O1Y_I0324ogbsx9ojzA`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Insignia U Rosario - Samsung`} src={`icons/code.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Insignia U Rosario - Samsung`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Codificacion y Programacion en Python`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://es.linkedin.com/posts/cristianadan_ganador-del-open-ai-chat-gpt-hackathon-activity-7081519456786472960-Prhg?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`1er puesto al Challenge de educacion - AI Lab`} src={`icons/ailab.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`1er puesto al Challenge de educacion - AI Lab`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Hackaton IA`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitter.com/PyLatam/status/1695840230417301783`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Pylatam`} src={`icons/code.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Pylatam`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Conferencia Python en Monterrey`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "50%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Hecho con`}
</Heading>
  <SimpleGrid columns={[1, 2]} spacing={`2em`}>
  <Link as={NextLink} href={`https://reflex.dev`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Reflex`} src={`reflex.png`} sx={{"height": "4em", "aspectRatio": "5 / 2"}}/>
</Link>
  <Link as={NextLink} href={`https://www.python.org`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image alt={`Logotipo de Python`} src={`python-icon.png`} sx={{"height": "4em", "aspectRatio": "5 / 2"}}/>
</Link>
</SimpleGrid>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#A3ABB2"}}>
  <Image alt={`Logotipo`} src={`logob1.png`} sx={{"height": "4em", "width": "4em"}}/>
  <Link as={``} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  <Box>
  {`©2023 `}
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {``}
</Text>
  {` `}
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {``}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Sebastian X-e II| Software Developer`}
</title>
  <meta content={`Software Developer`} name={`description`}/>
  <meta content={`avatar.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
