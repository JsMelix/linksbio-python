import reflex as rx
import link_bio.constants as const
from link_bio.styles.styles import Size
from link_bio.components.title import title
from link_bio.components.link_sponsor import link_sponsor


def sponsors() -> rx.Component:
    return rx.vstack(
        title("Hecho con"),
        rx.responsive_grid(
            link_sponsor(
                "reflex.png",
                const.ELGATO_URL,
                "Logotipo de Reflex"
            ),
            link_sponsor(
                "python-icon.png",
                const.MVP_URL,
                "Logotipo de Python"
            ),
            spacing=Size.BIG.value,
            columns=[1, 2]
        ),
        width="50%",
        align_items="start",
        spacing=Size.MEDIUM.value
    )
