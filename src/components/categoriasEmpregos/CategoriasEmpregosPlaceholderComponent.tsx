import React from 'react';
import { StyleSheet } from 'react-native';

export default function CategoriasEmpregosPlaceholderComponent(props: any) {
  return (
    <>

      {/* <Placeholder
                Animation={(props: JSX.IntrinsicAttributes) => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={(props: any) => (
                    <PlaceholderMedia style={styles.containerEsquerdo} />
                )}
                Right={(props: any) => (
                    <Placeholder style={styles.container}>
                        <PlaceholderMedia style={styles.containerEsquerdo} />
                    </Placeholder>
                )}
            />

            <Placeholder
                Animation={(props: JSX.IntrinsicAttributes) => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={(props: any) => (
                    <PlaceholderMedia style={styles.containerEsquerdo} />
                )}
                Right={(props: any) => (
                    <Placeholder style={styles.container}>
                        <PlaceholderMedia style={styles.containerEsquerdo} />
                    </Placeholder>
                )}
            />

            <Placeholder
                Animation={(props: JSX.IntrinsicAttributes) => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={(props: any) => (
                    <PlaceholderMedia style={styles.containerEsquerdo} />
                )}
                Right={(props: any) => (
                    <Placeholder style={styles.container}>
                        <PlaceholderMedia style={styles.containerEsquerdo} />
                    </Placeholder>
                )}
            />

            <Placeholder
                Animation={(props: JSX.IntrinsicAttributes) => (
                    <Fade {...props} style={{ backgroundColor: "gray" }} />
                )}
                Left={(props: any) => (
                    <PlaceholderMedia style={styles.containerEsquerdo} />
                )}
                Right={(props: any) => (
                    <Placeholder style={styles.container}>
                        <PlaceholderMedia style={styles.containerEsquerdo} />
                    </Placeholder>
                )}
            /> */}

    </>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'
  },

  containerEsquerdo: {
    backgroundColor: '#CFCFCF',
    width: 150,
    height: 150,
    margin: 10
  },

  containerDireito: {
    backgroundColor: '#CFCFCF',
    width: 250,
    height: 140,
    marginBottom: 10,
    marginTop: 10,
  },

  detalhes: {
    width: 250,
    marginBottom: 10,
    marginTop: 10,
  },

});
