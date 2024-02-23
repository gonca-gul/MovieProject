import React, { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './contentStyle';

function Content({
  children,
  contentStyle,
  scrollViewProps,
  refresh,
  onRefreshing,
  ...props
}) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing((prev) => !prev);
    setTimeout(() => { setRefreshing(false); }, 1500);
    if (onRefreshing) { await onRefreshing(); }
  }, [refreshing]);
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        refreshControl={refresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        ) : null}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        bounces={!!refresh}
        contentContainerStyle={[contentStyle]}
        style={styles.scrollView}
        {...scrollViewProps}
        {...props}
      >
        {children}
      </KeyboardAwareScrollView>
    );
 
}

export default Content;
