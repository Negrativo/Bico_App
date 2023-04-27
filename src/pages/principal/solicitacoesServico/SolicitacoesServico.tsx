import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './StyleSolicitacoesServico';
import { getSolicitacoesByUsuario } from '../../../service/solicitacaoService/solicitacaoService';
import { useUser } from '../../../context/AuthContext';
import { ServicoDoUsuarioDTO } from '../../../dtos/ServicoDoUsuarioDTO';

export default function () {
  const [dadosLista, setDados] = useState<ServicoDoUsuarioDTO[]>();
  const [mounted, setMounted] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    const fetchSolicitacoes = async () => {
      if (!!user?.id) {
        const solicitacoes = await getSolicitacoesByUsuario(user.id);
        if (!!solicitacoes) {
          setDados(solicitacoes);
        }
      }
    };

    if (mounted) {
      fetchSolicitacoes();
    }

    return () => {
      setMounted(false);
    };
  }, [user, mounted]);

  return (
    <View style={styles.container}>
      <Text>Solicitações de serviços</Text>
      <View>
        {(!!dadosLista?.length && dadosLista?.length > 0)
          ?
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dadosLista}
            keyExtractor={dadosLista => dadosLista.toString()}
            renderItem={({ item }) => (
              <>
                <View>
                  <Text>
                    {item.servico}
                  </Text>
                  <Text>
                    {item.horarioSolicitado}
                  </Text>
                  <Text>
                    {item.usuarioSolicitante}
                  </Text>
                </View>
              </>
            )}
          />
          :
          <View>
            <Text style={styles.Text}>Nenhuma solicitação no momento</Text>
          </View>
        }
      </View>
    </View>
  );
}